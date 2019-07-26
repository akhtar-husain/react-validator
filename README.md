# React Validator
Validation package for react, inspired by laravel validation.

## Usage Example
```JS
import validate from 'react-validator';

const rules = [
  {
    field: 'email',
    validations: ['required', 'email'],
    name: 'User email' // used to show error
  },
  {
    field: 'password',
    validations: ['required', 'password', 'confirm', 'digit:10'],
    name: 'Password' // used to show error
  }
];

class Login extends Component {
  state = {
    errors: {},
    isValidForm: true,
    formFields: {
      emai: '',
      password: ''
    }
  };
  
  _validate() {
    const { formFields } = this.state;
    const validRes = validate(formFields, rules);
    this.setState(() => ({ errors: validRes.errors, isValidForm: validRes.isValid }));
    return validRes.isValid;
  }
}
```
