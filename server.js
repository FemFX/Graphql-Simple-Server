const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(
    'mongodb+srv://ivan:123123951@gql-n4ra2.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDb connected...'))
  .catch(err => console.log(err));

server.listen({ port: 4000 }).then(res => {
  console.log(`Server running at ${res.url}`);
});
