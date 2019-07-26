/**
 * Exapmle validation rules.
 */
export default [
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