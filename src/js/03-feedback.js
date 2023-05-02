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

// const emailInput = document.querySelector(' [name="email"]');
// const messageInput = document.querySelector(' [name="message"]');
//const submitBtn = document.querySelector('button');
const feedbackForm = document.querySelector('.feedback-form');
const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
let feeldObj = {};

feedbackForm.addEventListener('input', event => {
  event.preventDefault();
  feeldObj.email = event.currentTarget.email.value;
  feeldObj.message = event.currentTarget.message.value;

  if (feeldObj.email === '') {
    delete feeldObj.email;
  }
  if (feeldObj.message === '') {
    delete feeldObj.message;
  }

  fromFormData(feeldObj);
});

function fromFormData(data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

feedbackForm.email.value = formValue?.email || '';
feedbackForm.message.value = formValue?.message || '';
