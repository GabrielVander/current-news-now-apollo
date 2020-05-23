"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    api: {
        key: process.env.API_KEY,
        timeout: Number(process.env.API_REQUEST_TIMEOUT) || 3000,
    },
    apollo: {
        port: Number(process.env.PORT) || 4000,
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true',
        tracing: process.env.APOLLO_TRACING === 'true',
    },
};
