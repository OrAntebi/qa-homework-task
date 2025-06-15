import { expect, test } from '../../fixtures/ui-fixture';
import { userService } from '../../services/user.service';
import { authService } from '../../services/auth.service';


test('User registration, login and save token', async ({ page, headerSection, registrationPage }) => {
    const user = userService.generateUser();
    await page.goto('/')
    await headerSection.clickRegistration();
    await registrationPage.fillRegistrationForm(user);
    await registrationPage.submitRegistration();
    expect(await registrationPage.isRegistrationSuccessful()).toBe(true);

    await headerSection.login(user)
    await headerSection.verifyLoginSuccess()

    await page.context().storageState({ path: authService.authPath });
});