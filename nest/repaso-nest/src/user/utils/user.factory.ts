export const userFactory = {
    getUser: (id: number) => {
        return users[id];
    }
}

const users = {
    1: {
        email: 'test@example.com',
        password: '123456'
    },
    2: {
        email: 'test2@example.com',
        password: '123456'
    },
    3: {
        email: 'test3@example.com',
        password: '123456'
    }
}
