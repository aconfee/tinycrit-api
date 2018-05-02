const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
import dummyResolver from'./resolvers/dummy.resolver';
import dummyTypedef from './types/dummy.type';
import { DummyService } from '../services/dummy.service';

const queries = `
type Query {
  dummy: Dummy
}
`;

const typeDefs = queries.concat(
  dummyTypedef
);

const resolvers = (<any>Object).assign({}, 
  dummyResolver(new DummyService())
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;