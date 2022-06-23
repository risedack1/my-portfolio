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

const inputs = document.querySelectorAll('.footer__form-input');
const labels = document.querySelectorAll('.footer__form-label');

const afterForm = () => {
  console.log(1);
  labels.forEach(el => el.classList.remove('validate-error'));

  inputs.forEach(el => {
    if (el.classList.contains('just-validate-error-field')) {
      el.closest('.footer-form-label').classList.add('.validate-error');
    }
  });
};

validateForms('.footer-form', rules1, afterForm);
