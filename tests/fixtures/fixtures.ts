import { test as base } from '@playwright/test';
import { LoginPage } from '../page-object-models/login.page';

interface TestFixtures {
  loginPage: LoginPage;
}

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
