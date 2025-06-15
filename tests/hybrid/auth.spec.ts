import { test, expect } from '../../fixtures/ui-fixture';
import { authService } from '../../services/auth.service';
import { buildUrl, ENDPOINTS } from '../../api/endpoints';

test('update gender via API and verify in UI', async ({ page, request, headerSection }) => {
    const token = authService.getAuthToken();

    const res = await request.get(buildUrl(ENDPOINTS.AUTH.USER_PROFILE), {
        headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status()).toBe(200);

    const currentProfile = await res.json();

    const updatedProfile = { ...currentProfile, gender: currentProfile.gender === 'Male' ? 'Female' : 'Male' };

    const putRes = await request.put(buildUrl(ENDPOINTS.AUTH.USER_PROFILE), {
        headers: { Authorization: `Bearer ${token}` },
        data: updatedProfile
    });
    expect(putRes.status()).toBe(200);

    await page.goto('/');
    await headerSection.clickProfile()
    const expectedGender = updatedProfile.gender;
    await expect(page.locator('#gender')).toHaveValue(expectedGender);
});
