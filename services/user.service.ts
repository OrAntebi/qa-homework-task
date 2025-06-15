import { faker } from '@faker-js/faker';

type User = {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
};

export const userService = {
    generateUser,
};

function generateUser(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = faker.internet.username({ firstName, lastName }).toLowerCase();
    const password = faker.internet.password({
        length: 10,
        memorable: false,
        pattern: /[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~]/,
    });

    return { username, firstName, lastName, password };
}
