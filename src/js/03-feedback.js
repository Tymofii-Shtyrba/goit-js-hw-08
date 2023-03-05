import throttle from "lodash.throttle";

const feedback = document.querySelector('.feedback-form');
const emailField = feedback.querySelector('input');
const messageField = feedback.querySelector('textarea');
const submitButton = feedback.querySelector('button');

const storageContents = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storageContents) {
  console.log('yes');
  emailField.value = storageContents.email;
  messageField.value = storageContents.message;
}



const currentContent = {};

const contentChanges = e => {
  e.target.name === 'email' ? currentContent.email = e.target.value : currentContent.message = e.target.value;
  console.log(currentContent);
  localStorage.setItem("feedback-form-state", JSON.stringify(currentContent));
}



feedback.addEventListener('input', throttle(contentChanges, 500));
feedback.addEventListener('submit', e => {
  e.preventDefault();
  emailField.value = '';
  messageField.value = '';
  localStorage.removeItem("feedback-form-state");
}) 

