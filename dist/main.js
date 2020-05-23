"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const environment_1 = require("./environment");
const server = new apollo_server_1.ApolloServer({
    schema: schema_1.default,
    tracing: environment_1.environment.apollo.tracing,
    introspection: environment_1.environment.apollo.introspection,
    playground: environment_1.environment.apollo.playground,
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
