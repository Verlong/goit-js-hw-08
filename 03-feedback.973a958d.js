var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequired7c6=r),r("kEUo3");const l=document.querySelector(".feedback-form"),o=JSON.parse(localStorage.getItem("feedback-form-state"));let n={};l.addEventListener("input",(e=>{var a;e.preventDefault(),n.email=e.currentTarget.email.value,n.message=e.currentTarget.message.value,""===n.email&&delete n.email,""===n.message&&delete n.message,a=n,localStorage.setItem("feedback-form-state",JSON.stringify(a))})),l.email.value=o?.email||"",l.message.value=o?.message||"";
//# sourceMappingURL=03-feedback.973a958d.js.map
