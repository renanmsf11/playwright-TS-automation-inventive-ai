import { expect, Page } from '@playwright/test';


export class LoginPage {

  constructor(private page: Page) {
  }

  async goto() {
    await this.page.goto('https://staging.inventive.ai');
  }
  async userClickContinueButton() {
    await this.page.locator('button[type="submit"]').click();
  }

  async userClickToEnterButton() {
    await this.page.locator('button[name="intent"][value="password"]').click();
  }

  async userTypeValidEmail() {
    await expect(this.page.locator('input[name="email"]')).toBeVisible();
    await this.page.locator('input[name="email"]').fill('qainterview@inventive.ai');
  }

  async userTypeValidPassword() {
    await expect(this.page.locator('input[name="password"]')).toBeVisible();
    await this.page.locator('input[name="password"]').fill(']1r3v)oLUKW$0&~s');

  }
  async validateUserIsLoggedIn() {
    await expect(
  this.page.locator('h1.page-header').getByText('Welcome back,', { exact: false })
).toBeVisible({ timeout: 25000 });
  }

 async userClickNewProjectButton() {
    await this.page.getByRole('button', { name: 'New Project' }).click();
  }


}


