# React Validator
Validation package for react, inspired by laravel validation.

## Usage Example
```JS
import validate from 'react-validator';

const rules = [
  {
    field: 'email',
    validations: ['required', 'email'],
    name: 'Admin name'
  },
  {
    field: 'password',
    validations: ['required', 'password', 'confirm', 'digit:10'],
    name: 'Password'
  }
]

class Login extends Component {
  state = {
    errors: {},
    isValidForm: true,
  }
  
  _validate() {
    const validRes = validate(this.state, adminValidationRules)
    this.setState(() => ({ errors: validRes.errors, isValidForm: validRes.isValid }))
    return validRes.isValid;
  }
}
```
