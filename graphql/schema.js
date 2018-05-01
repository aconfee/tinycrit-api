const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const dummyResolver = require('./resolvers/dummy.resolver.js');
const dummyTypedef = require('./types/dummy.type.js');

const queries = `
type Query {
  dummy: Dummy
}
`;

const typeDefs = queries.concat(
  dummyTypedef
);

const resolvers = Object.assign({}, 
  dummyResolver
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;