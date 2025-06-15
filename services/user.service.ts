import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();

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

    return {
        username,
        firstName,
        lastName,
        password: process.env.PASSWORD!,
    };
}
