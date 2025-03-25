export const utilService = {
    getRandomEmailAddress
}


async function getRandomEmailAddress() {
    return `testuser${Date.now()}@example.com`
}