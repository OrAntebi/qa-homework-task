// fixtures.ts
import { test as base } from '@playwright/test';
import { HeaderSection } from '../pages/HeaderSection';
import { HomePage } from '../pages/HomePage';
import { OverallPage } from '../pages/OverallPage';
import { MakePage } from '../pages/MakePage';
import { ModelPage } from '../pages/ModelPage';
import { ProfilePage } from '../pages/ProfilePage';
import { RegistrationPage } from '../pages/RegistrationPage';

type Fixtures = {
    headerSection: HeaderSection;
    homePage: HomePage;
    overallPage: OverallPage;
    makePage: MakePage;
    modelPage: ModelPage;
    profilePage: ProfilePage;
    registrationPage: RegistrationPage;
};

export const test = base.extend<Fixtures>({
    headerSection: async ({ page }, use) => {
        const headerSection = new HeaderSection(page);
        await use(headerSection);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    overallPage: async ({ page }, use) => {
        const overallPage = new OverallPage(page);
        await use(overallPage);
    },

    makePage: async ({ page }, use) => {
        const makePage = new MakePage(page);
        await use(makePage);
    },

    modelPage: async ({ page }, use) => {
        const modelPage = new ModelPage(page);
        await use(modelPage);
    },

    profilePage: async ({ page }, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    },

    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
});

export { expect } from '@playwright/test';