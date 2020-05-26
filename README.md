# Current News Now - Apollo

## Description
Current News Now is a simple application that shows the lastest news in the past 5 minutes. This repository is a simple
Apollo GraphQL gateway that bridges the [Currents API](https://currentsapi.services/en) 
and my [UI implementation](https://github.com/GabrielVander/current-news-now). It's primary objective was to help me better 
understand both Apollo Server API building and Typescript in general

The server is currently deployed [here](https://current-news-now-apollo.herokuapp.com/) (GraphQLPlayground is enabled)

The application itself can also be found [here](https://current-news-now.herokuapp.com/)

## Environment variables

- **API_KEY** - [Currents API](https://currentsapi.services/en) key
- **API_TIMEOUT** - How long to wait for API response in milliseconds - defaults to `2000`
- **APOLLO_INTROSPECTION** - Whether to use Apollo Introspection or not - defaults to `false`
- **APOLLO_PLAYGROUND** - Wheter to use Apollo Playground or not - defaults to `false`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the server contained in the `dist` folder.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser - to use GraphQL Playground make sure the 
environment variable is set accordingly

### `yarn start:dev`

Compiles the Typescript files in the `dist` folder and runs the server on 
that folder<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser - to use GraphQL Playground make sure the 
environment variable is set accordingly

### `yarn compile`

Compiles the Typescript files to the `dist` folder<br />
