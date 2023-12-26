import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { BASE_URL, LOGIN_URL } from '../urls';
// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

test.describe('Log in an existing user', () => {
  test.beforeEach(async ({ page }) => {
    chromium.use(StealthPlugin());
    await page.goto(LOGIN_URL);
  });

  test('going through the login flow to sign in', async ({
    page,
    loginPage,
  }) => {
    await loginPage.enterLogin(process.env.LOGIN!);
    await loginPage.clickSignInBtn();
    await loginPage.enterPasswd(process.env.PASSWORD!);
    await loginPage.clickSignInBtn();

    await expect(page).toHaveURL(BASE_URL);
  });

  test('login validation: should show hint for an invalid username', async ({
    loginPage,
  }) => {
    await loginPage.enterLogin(`Aaw${process.env.LOGIN!}`);
    await loginPage.clickSignInBtn();
    await loginPage.waitForLoginHint();
  });

  test('login validation: should show hints for an invalid password', async ({
    loginPage,
  }) => {
    await loginPage.enterLogin(process.env.LOGIN!);
    await loginPage.clickSignInBtn();
    await loginPage.enterPasswd(`${process.env.PASSWORD!}r23`);
    await loginPage.clickSignInBtn();
    await loginPage.waitForPasswordHints();
  });
});
