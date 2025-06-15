import { test } from '../../fixtures/ui-fixture';

test.use({ storageState: 'storage/auth.json' });

test.beforeEach(async ({ page, headerSection }) => {
    await page.goto('/');
    await headerSection.verifyLoginSuccess();
});

test('Display profile page for logged-in user', async ({ headerSection }) => {
    await headerSection.clickProfile()
})

test('Allow user to vote for a car', async ({ homePage, modelPage }) => {
    await homePage.navigateToPopularModelPage()
    await modelPage.voteAndVerify()
})

test('Show model page when clicked', async ({ homePage, overallPage, modelPage }) => {
    await homePage.navigateToOverallPage()
    const modelName = await overallPage.clickFirstModelAndGetName()
    await modelPage.verifyPageTitle(modelName)
});

test('Show make page when clicked', async ({ homePage, overallPage, makePage }) => {
    await homePage.navigateToOverallPage()
    const makeName = await overallPage.clickFirstMakeAndGetName()
    await makePage.verifyPageTitle(makeName)
});

test('Update profile information successfully', async ({ headerSection, profilePage }) => {
    await headerSection.clickProfile()
    await profilePage.fillInput('age', '25')
    await profilePage.submitAndVerify()
})

test('Logout and redirect to home page', async ({ headerSection }) => {
    await headerSection.logout()
})