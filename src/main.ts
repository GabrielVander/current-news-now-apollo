import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { environment } from "./environment";

const server = new ApolloServer({
    schema: schema,
    tracing: environment.apollo.tracing,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground,
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
