import { test, expect } from '@playwright/test';
import { authService } from '../../services/auth.service';
import { modelService } from '../../services/model.service'
import { ENDPOINTS, buildUrl } from '../../api/endpoints';

test('validate /profile endpoint returns user data', async ({ request }) => {
    const path = ENDPOINTS.AUTH.USER_PROFILE;

    const res = await request.get(buildUrl(path), {
        headers: {
            Authorization: `Bearer ${authService.getAuthToken()}`
        }
    });

    expect(res.status()).toBe(200);
});

test('validate current user matches token', async ({ request }) => {
    const token = authService.getAuthToken();
    const decoded = authService.parseToken(token);

    const res = await request.get(buildUrl(ENDPOINTS.AUTH.CURRENT_USER), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    expect(res.status()).toBe(200);

    const user = await res.json();

    expect(decoded.username).toContain(user.firstName.toLowerCase());
    expect(decoded.username).toContain(user.lastName.toLowerCase());
});

test('validate /models?page=1 returns list of models', async ({ request }) => {
    const path = ENDPOINTS.OVERALL.GET_MODELS_LIST(1);

    const res = await request.get(buildUrl(path), {
        headers: {
            Authorization: `Bearer ${authService.getAuthToken()}`
        }
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.models?.length).toBeGreaterThan(0);
});

/* You can vote only once for each model with the same user */
test('validate voting for model returns 200', async ({ request }) => {
    const modelId = modelService.getRandomModelId();
    const path = ENDPOINTS.MODELS.VOTE_FOR_MODEL(modelId);

    const res = await request.post(buildUrl(path), {
        headers: {
            Authorization: `Bearer ${authService.getAuthToken()}`
        },
        data: {
            comment: 'vote test'
        }
    });

    expect(res.status()).toBe(200);
});

test('validate model details are returned by ID', async ({ request }) => {
    const modelId = 'ckl2phsabijs71623vk0|ckl2phsabijs71623vqg';
    const path = ENDPOINTS.MODELS.GET_MODEL_BY_ID(modelId);

    const res = await request.get(buildUrl(path), {
        headers: {
            Authorization: `Bearer ${authService.getAuthToken()}`
        }
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.makeId).toBeDefined();
});
