# React Validator
Validation package for react, inspired by laravel validation.

## Getting Started
Install it using the npm package manager.

```
npm install validator-react
```

## Usage Example
```JS
import validate from 'validator-react';

const rules = [
  {
    field: 'email',
    validations: ['required', 'email'],
    name: 'User email' // used to show in error message
  },
  {
    field: 'password',
    validations: ['required', 'password', 'confirm', 'digit:10'],
    name: 'Password' // used to show in error message
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
## Authors
* [Akhtar Husain](https://github.com/akhtar-husain)
