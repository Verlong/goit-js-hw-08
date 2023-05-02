// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми.
// Напиши скрипт, який буде зберігати значення полів у локальне сховище,
//     коли користувач щось друкує.
// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//  у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
// message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
import { throttle } from 'lodash';

//const submitBtn = document.querySelector('button');

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

refs.feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = {};
  refs.emailInput.value = '';
  refs.messageInput.value = '';
  refs.feedbackForm.reset();
});

let formData = loadFromLS('feedback-form-state') || {};

refs.feedbackForm.addEventListener('input', throttle(inputFormValue, 3000));

function inputFormValue(event) {
  const value = event.target.value;
  const key = event.target.name;
  console.log(key, value);
  formData[key] = value;
  saveToLS('feedback-form-state', formData);
}

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

refs.feedbackForm.elements.email.value = formData?.email || '';
refs.feedbackForm.elements.message.value = formData?.message || '';

// const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
// let feeldObj = {};

// feedbackForm.addEventListener('input', event => {
//   event.preventDefault();
//   feeldObj.email = event.currentTarget.email.value;
//   feeldObj.message = event.currentTarget.message.value;

//   if (feeldObj.email === '') {
//     delete feeldObj.email;
//   }
//   if (feeldObj.message === '') {
//     delete feeldObj.message;
//   }

//   fromFormData(feeldObj);
// });

// function fromFormData(data) {
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }

// feedbackForm.email.value = formValue?.email || '';
// feedbackForm.message.value = formValue?.message || '';
