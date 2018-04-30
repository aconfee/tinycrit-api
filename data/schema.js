const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const dummyResolver = require('../resolvers/dummy.resolver.js');

// TODO: Can use ES6 spread syntax later.
const resolvers = Object.assign({}, dummyResolver);

// TODO: Split this out -- same ish as I split out resolvers.
const typeDefs = `
type Query {
  dummy: Dummy
}

type Dummy {
  message: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;