# Testing UI yandex.passport Authorization

## Description

Stealth required, because when you try to log in through Playwright or Puppeteer, Yandex can detect authentication by «robot», but you can prevent detection by using «stealth» plugin.

## Stack

A basic set of packages:

- [Playwright](https://playwright.dev) — testing framework;
- [Playwright-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra) — modular plugin framework for Playwright;
- [Puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth) — «stealth» plugin to prevent detection.

## How to Use

1. Clone repository
2. Install dependencies: `npm install`
3. Install dependencies for testing framework: `npm run test:install-deps`
4. Setup env variables
5. Run tests for the first time:
`npm run test`