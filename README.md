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

## Available rules
* ```required``` field must not be empty or null or undefined.

* ```numeric``` field must be a numeric value.

* ```email```  field must be a valid email address.

* ```digit```  example - ```digit:10``` field must be digit with fixed length of 10.

* ```url```  field must be a valid url.

* ```password```  field must conatain 8-14 characters and atleast one capital character and one digit.

* ```confirm```  field must me equals to the fieldComfirm field. example - 
```
{
  field: 'password',
  validations: ['required', 'password', 'confirm', 'digit:10'],
  name: 'Password' // used to show in error message
}
```
then in the formFields there must me a field named passwordConfirm field which holds the same value as password.

* ```min```  example - ```min:10``` field must hold the length greater than or equal to 10 characters.

* ```max```  example - ```max:10``` field must hold the length less than or equal to 10 characters.


## Authors
* [Akhtar Husain](https://github.com/akhtar-husain)
