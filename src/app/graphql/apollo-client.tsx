import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;