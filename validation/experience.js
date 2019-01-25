const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  
  if (Validator.isEmpty(data.title)) {
    errors.title = 'job title is required';
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = 'where do you work is important';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'from date is required';
  }
  

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
