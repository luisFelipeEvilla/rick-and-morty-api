import 'dotenv/config.js';
import express from 'express';
import { PORT } from './config';
import { CharacterQueryType } from './queries/CharacterQueryType';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'

const app = express();

const schema = new GraphQLSchema({ query: CharacterQueryType });

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
