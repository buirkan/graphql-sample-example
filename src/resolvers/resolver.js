const users = [{
    id: 1,
    name: 'Test 1',
    email: 'test1@gmail.com'
}, {
    id: 2,
    name: 'Test 2',
    email: 'test2@gmail.com'
}]

module.exports = {
    // "controllers"
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        // criar user
        createUser: () => user[0]
    }
}
