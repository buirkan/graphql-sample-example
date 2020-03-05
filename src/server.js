const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers/resolvers')

const server = new GraphQLServer({
    // schema
    typeDefs: path.resolve(__dirname, './schema/schema.graphql'),
    resolvers
})

// run server
server.start()
