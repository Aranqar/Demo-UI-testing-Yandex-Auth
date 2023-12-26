export enum LoginInputSelectors {
  LoginInput = 'field:input-login',
  PasswdInput = 'field:input-passwd',
}

export enum LoginSelectors {
  SignInBtn = 'button:action:passp:sign-in',
  IncorrectLoginHint = 'field:input-login:hint',
  incorrectPasswordHint = 'field:input-passwd:hint',
  incorrectPasswordIcon = '.Field-errorIcon',
}
