import {initPhoneMask} from './phone-mask.js';

const form = document.querySelector('.feedback form');
const nameInput = document.querySelector('.feedback__field--name input');
const phoneInput = document.querySelector('.feedback__field--phone input');

const minNameLength = 1;
const minPhoneLength = 17;

const validateFieldLength = (field, number) => {
  if (field.value.length > number) {
    field.classList.remove('is-invalid');
    return true;
  }
  field.classList.add('is-invalid');
  return false;
};

const inputRemoveErrorHandler = (evt) => evt.target.classList.remove('is-invalid');


const validateInputs = () => {
  const flagName = validateFieldLength(nameInput, minNameLength);
  const flagPhone = validateFieldLength(phoneInput, minPhoneLength);

  if (!flagName || !flagPhone) {
    return false;
  }
  return true;
};

const formHandler = (evt) => {
  evt.preventDefault();
  if (validateInputs()) {
    evt.target.submit();
  }
};

export const initFormValidate = () => {
  if (!form) {
    return;
  }
  initPhoneMask();
  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', inputRemoveErrorHandler);
  });
  form.addEventListener('submit', formHandler);
};
