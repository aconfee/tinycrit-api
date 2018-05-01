const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const dummyResolver = require('./resolvers/dummy.resolver.js');
const dummyTypedef = require('./types/dummy.type.js');

const dummyService = require('../services/dummy.service.js');

const queries = `
type Query {
  dummy: Dummy
}
`;

const typeDefs = queries.concat(
  dummyTypedef
);

// Technically this is where resolver DI happens by providing services.
const resolvers = Object.assign({}, 
  dummyResolver(dummyService)
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;