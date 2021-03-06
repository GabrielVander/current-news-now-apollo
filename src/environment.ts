interface Environment {
    api: {
        key: string,
        timeout: number,
    },
    apollo: {
        port: number,
        introspection: boolean,
        playground: boolean,
        tracing: boolean,
    },
}

export const environment: Environment = {
    api: {
        key: process.env.API_KEY!,
        timeout: Number(process.env.API_REQUEST_TIMEOUT) || 3000,
    },
    apollo: {
        port: Number(process.env.PORT!) || 4000,
        introspection: process.env.APOLLO_INTROSPECTION === 'true',
        playground: process.env.APOLLO_PLAYGROUND === 'true',
        tracing: process.env.APOLLO_TRACING === 'true',
    },
};
