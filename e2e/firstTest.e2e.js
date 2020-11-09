const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('sign_up_page_button')).tap();
    await expect(element(by.text('Create an account today'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
