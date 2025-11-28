import { test } from '@playwright/test';

import { ProjectPage } from '@pages/projectPage';

import { LoginPage } from '@pages/loginPage';

test('Scenario 01 - Validate that is possible to login into the application.', async ({ page }) => {

  const loginPage = new LoginPage (page);

  await loginPage.goto();

  await loginPage.userTypeValidEmail();
  await loginPage.userClickContinueButton();
  await loginPage.userTypeValidPassword();
  await loginPage.userClickToEnterButton();
  await loginPage.validateUserIsLoggedIn();


});

test('Scenario 02 - Validate that is possible to navigate to “New project” page.', async ({ page }) => {
  
  const loginPage = new LoginPage (page);
  const projectPage = new ProjectPage (page);

  await loginPage.goto();

  await loginPage.userTypeValidEmail();
  await loginPage.userClickContinueButton();
  await loginPage.userTypeValidPassword();
  await loginPage.userClickToEnterButton();
  await loginPage.validateUserIsLoggedIn();

  await loginPage.userClickNewProjectButton();

  await projectPage.userRedirectedToProjectDetailsPage();


});
