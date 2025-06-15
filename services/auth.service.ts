import { readFileSync } from 'fs';
import path from 'path';

const authPath = path.resolve(__dirname, '../storage/auth.json');

export const authService = {
    authPath,
    getAuthToken,
    parseToken
};

function getAuthToken() {
    const json = JSON.parse(readFileSync(authPath, 'utf-8'));
    return json.origins?.[0]?.localStorage?.find((i: any) => i.name === 'token')?.value || null;
}


function parseToken(token: string) {
    try {
        const base64Payload = token.split('.')[1];
        const decodedPayload = Buffer.from(base64Payload, 'base64').toString('utf-8');
        return JSON.parse(decodedPayload);
    } catch (err) {
        throw new Error('Invalid token');
    }
}
