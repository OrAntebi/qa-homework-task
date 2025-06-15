import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 40000,
    retries: 1,
    reporter: 'html',
    fullyParallel: true,

    expect: {
        timeout: 10000
    },

    use: {
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        baseURL: 'https://buggy.justtestit.org',
    },

    projects: [
        {
            name: 'Auth-tests',
            testMatch: /auth\.spec\.ts$/,
            use: {
                browserName: 'chromium',
                storageState: 'storage/auth.json',
            },
        },
        {
            name: 'Guest-tests',
            testMatch: /guest\.spec\.ts$/,
            use: {
                browserName: 'chromium',
                storageState: undefined,
            },
        },
    ],
});
