const form = document.querySelector('.feedback').querySelector('form');

const regexName = /^[a-zA-Zа-яА-Я]*$/;
const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const validateInput = (field, regex, value) => {
  if (!regex.test(value) || !value) {
    field.classList.add('is-invalid');
    return false;
  }
  field.classList.remove('is-invalid');
  return true;
};

const validateInputs = () => {
  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const flagName = validateInput(nameInput, regexName, nameInput.value);
  const flagPhone = validateInput(phoneInput, regexPhone, phoneInput.value);

  if (!flagPhone || !flagName) {
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

const setFormValidator = () => {
  form.addEventListener('submit', formHandler);
};

export {setFormValidator};
