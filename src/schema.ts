import { buildSchemaSync } from "type-graphql";
import NewsResolver from "./Resolver/NewsResolver";

export default buildSchemaSync({
    resolvers: [NewsResolver],
    emitSchemaFile: true,
});
