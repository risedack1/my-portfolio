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
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.footer-form', rules1, afterForm);
