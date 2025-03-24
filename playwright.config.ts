import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    retries: 1,
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        }
    ],
})
