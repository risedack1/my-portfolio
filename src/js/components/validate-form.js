import { validateForms } from '../functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Add your name'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Add phone number'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Add email'
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      },
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Add message'
      }
    ]
  },
];

const afterForm = () => {
  const successMessage = document.querySelector('.footer-form__success');
  successMessage.classList.add('footer-form__success--active');

  setTimeout(() => {
    successMessage.classList.remove('footer-form__success--active');
  }, 3000);
};

validateForms('.footer-form', rules1, afterForm);
