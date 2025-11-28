import { expect, Page } from '@playwright/test';


export class ProjectPage {

  constructor(private page: Page) {
  }



 async userRedirectedToProjectDetailsPage() {
    await expect(
  this.page.getByText('Project Details', { exact: true })).toBeVisible();
  }

 async userTypeRequiredFieldsInProjectDetailsPage() {
    await this.page.getByLabel('Project Title').fill('Project test name');
    await this.page.getByText('Client Description').locator('xpath=following::textarea[1]').fill('Client test description');
    await this.page.getByText('Client Name').locator('xpath=following::textarea[1]').fill('Client test name');
    await this.page.getByText('Deal Size').locator('xpath=following::input[1]').fill('5000');
  }

   async userRedirectedToTeamMembersPage() {
    await expect(this.page.getByText('Add Team Members to Collaborate', { exact: true })).toBeVisible();
  }

  async userRedirectedToUploadDocumentsPage() {
    await expect(this.page.getByText('Drag & drop files here or ', { exact: true })).toBeVisible();
  }

   async userClickBrowseButton() {
    await this.page.getByText('Browse').click();
  }

async userInputFile() {
    await this.page.setInputFiles('input[type="file"]', 'tests/documents/challengeQA.txt.txt');
  }
async userRedirectedToProjectOverviewPage() {
    await expect(this.page.getByText('Project Overview', { exact: true })).toBeVisible({ timeout: 25000 });
  }

}


