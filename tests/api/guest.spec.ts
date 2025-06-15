import { test, expect, request } from '@playwright/test';
import { authService } from '../../services/auth.service';
import { userService } from '../../services/user.service';
import { ENDPOINTS, buildUrl } from '../../api/endpoints';
import { writeFileSync } from 'fs';

test('validate registration, login and save token via API', async () => {
    const user = userService.generateUser();
    const context = await request.newContext();

    const registerRes = await context.post(buildUrl(ENDPOINTS.AUTH.REGISTER), {
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password
        }
    });
    expect(registerRes.status()).toBe(201);

    const loginRes = await context.post(buildUrl(ENDPOINTS.AUTH.LOGIN), {
        form: {
            grant_type: 'password',
            username: user.username,
            password: user.password
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    expect(loginRes.status()).toBe(200);

    const loginData = await loginRes.json();
    const token = loginData.access_token;

    const authJson = {
        cookies: [],
        origins: [
            {
                origin: 'https://buggy.justtestit.org',
                localStorage: [{ name: 'token', value: token }]
            }
        ]
    };

    writeFileSync(authService.authPath, JSON.stringify(authJson, null, 2));
});
