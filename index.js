import Validator from 'validator';

const validate = (fields, validationRules) => {
  let errors = {}, isValid = true;
  
  validationRules.forEach(obj => {
    const { field, validations, name } = obj;
    for (let i = 0; i < validations.length; i++) {
      const rule = validations[i].split(':');
      const numOfDigits = !!rule[1] ? parseInt(rule[1]) : 0;
      switch (rule[0]) {
        case 'numeric':
          if ((!!errors[field] === false) && !Validator.isEmpty('' + fields[field]) && !Validator.isNumeric('' + fields[field])) {
            errors[field] = `${name} must be numeric.`;
            isValid = false;
            continue;
          }
          break;
        case 'email':
          if ((!!errors[field] === false) && !Validator.isEmpty('' + fields[field]) && !Validator.isEmail('' + fields[field])) {
            errors[field] = `${name} is not a valid email.`;
            isValid = false;
            continue;
          }
          break;
        case 'digit':
          if ((!!errors[field] === false) && !Validator.isEmpty('' + fields[field]) && !Validator.isLength('' + fields[field], { min: numOfDigits, max: numOfDigits })) {
            errors[field] = `${name} must be of ${numOfDigits} digits.`;
            isValid = false;
            continue;
          }
          break;
        case 'url':
          if ((!!errors[field] === false) && !Validator.isURL('' + fields[field])) {
            errors[field] = `${name} is not a valid URL.`;
            isValid = false;
            continue;
          }
          break;
        case 'password':
          if ((!!errors[field] === false) && (!Validator.isLength('' + fields[field], { min: 8 }) || !Validator.isLength('' + fields[field], { max: 14 }))) {
              errors[field] = `${name} must have atleast 8-14 characters`;
              isValid = false;
              continue;
            }
            var pwd = new RegExp("^(?=.*[A-Z])");
            if ((!!errors[field] === false) && !pwd.test('' + fields[field])) {
              errors[field] = `${name} must contain one capital character`;
              isValid = false;
              continue;
            }
            pwd = new RegExp("^(?=.*[0-9])");
            if ((!!errors[field] === false) && !pwd.test('' + fields[field])) {
              errors[field] = `${name} must contain a digit`;
              isValid = false;
              continue;
            }
          break;
        case 'confirm':
          if ((!!errors[field + 'Confirm'] === false) && !Validator.equals('' + fields[field], '' + fields[field + 'Confirm'])) {
            errors[field + 'Confirm'] = `${name} did not match`;
            isValid = false;
            continue;
          }
          break;
        case 'min':
          if ((!!errors[field] === false) && !Validator.isLength('' + fields[field], { min: numOfDigits })) {
              errors[field] = `${name} must have minimum ${numOfDigits} characters`;
              isValid = false;
              continue;
            }
          break;
        case 'max':
          if ((!!errors[field] === false) && !Validator.isLength('' + fields[field], { max: numOfDigits })) {
              errors[field] = `${name} can have maximum ${numOfDigits} characters`;
              isValid = false;
              continue;
            }
          break;
        case 'required':
        default:
          if ((!!errors[field] === false) && Validator.isEmpty('' + fields[field])) {
            errors[field] = `${name} is required.`;
            isValid = false;
            continue;
          }
          break;
      }
    }
  });

  return { isValid, errors };
}

export default validate;