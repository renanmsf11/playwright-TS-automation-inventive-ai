import { test } from '@playwright/test';

import { ProjectPage } from '@pages/projectPage';

import { LoginPage } from '@pages/loginPage';

test('Scenario 01 - Validate that is possible to Create New project and validate its creation.', async ({ page }) => {

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
  
  await projectPage.userTypeRequiredFieldsInProjectDetailsPage();

  await loginPage.userClickContinueButton();

  await projectPage.userRedirectedToTeamMembersPage();
  await loginPage.userClickContinueButton();

  await projectPage.userRedirectedToUploadDocumentsPage();

  await projectPage.userClickBrowseButton();
  await projectPage.userInputFile();

  await loginPage.userClickContinueButton();

  await projectPage.userRedirectedToProjectOverviewPage();
});