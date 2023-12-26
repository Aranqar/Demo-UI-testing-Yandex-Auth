import { Page } from '@playwright/test';
import {
  LoginInputSelectors,
  LoginSelectors,
} from '../selectors/login.selectors';

export class LoginPage {
  constructor(readonly page: Page) {}

  async enterLogin(login: string) {
    await this.page.getByTestId(LoginInputSelectors.LoginInput).fill(login);
  }

  async enterPasswd(passwd: string) {
    await this.page.getByTestId(LoginInputSelectors.PasswdInput).fill(passwd);
  }

  async clickSignInBtn() {
    await this.page.getByTestId(LoginSelectors.SignInBtn).first().click();
  }

  async waitForLoginHint() {
    await this.page.getByTestId(LoginSelectors.IncorrectLoginHint),
      {
        state: 'visible',
      };
  }

  async waitForPasswordHints() {
    await this.page.getByTestId(LoginSelectors.incorrectPasswordHint),
      {
        state: 'visible',
      };

    await this.page.locator(LoginSelectors.incorrectPasswordIcon),
      {
        state: 'visible',
      };
  }
}
