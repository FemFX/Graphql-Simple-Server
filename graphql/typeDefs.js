const { gql } = require('apollo-server');
module.exports = gql`
  type Car {
    id: ID!
    name: String!
  }
  input CarInput {
    name: String!
  }
  type Query {
    getCars: [Car]!
  }
  type Mutation {
    addCar(carInput: CarInput): Car!
  }
  
`;
