export const BASE_URL = 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod';

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/oauth/token',
        REGISTER: '/users',
        CURRENT_USER: '/users/current',
        USER_PROFILE: '/users/profile',
    },

    MAKE: {
        GET_MODELS_LIST: (page: number = 1) => `/makes?page=${page}`
    },

    MODELS: {
        GET_MODEL_BY_ID: (id: string) => `/models/${encodeURIComponent(id)}`,
        VOTE_FOR_MODEL: (modelId: string) => `/models/${encodeURIComponent(modelId)}/vote`
    },

    OVERALL: {
        GET_MODELS_LIST: (page: number = 1) => `/models?page=${page}`
    }
};

export function buildUrl(path: string): string {
    return `${BASE_URL}${path}`;
}
