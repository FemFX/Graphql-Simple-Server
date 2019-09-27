const resolvers = require('./resolvers');

module.exports = {
    Query : { ...resolvers.Query },
    Mutation : { ...resolvers.Mutation }
}