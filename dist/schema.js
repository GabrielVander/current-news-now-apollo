"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const NewsResolver_1 = __importDefault(require("./Resolver/NewsResolver"));
exports.default = type_graphql_1.buildSchemaSync({
    resolvers: [NewsResolver_1.default],
    emitSchemaFile: true,
});
