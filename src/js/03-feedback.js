import throttle from "lodash.throttle";

const feedback = document.querySelector('.feedback-form');
const emailField = feedback.querySelector('input');
const messageField = feedback.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state'
const storageContents = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (storageContents) {
  emailField.value = storageContents.email;
  messageField.value = storageContents.message;
}



const currentContent = {};

const contentChanges = e => {
  e.target.name === 'email' ? currentContent.email = e.target.value : currentContent.message = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentContent));
}



feedback.addEventListener('input', throttle(contentChanges, 500));
feedback.addEventListener('submit', e => {
  currentContent.email = emailField.value;
  currentContent.message = messageField.value;
  console.log(currentContent);
  e.preventDefault();
  feedback.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}) 