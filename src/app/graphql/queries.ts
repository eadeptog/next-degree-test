import {graphql} from "@/gql";

export const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
    query GetFilmsWithCharactersAndDirectors($first: Int, $after: String) {
        allFilms(first: $first, after: $after) {
            films {
                id
                director
                title
                episodeID
                characterConnection {
                    characters {
                        name
                    }
                }
                releaseDate
                producers
            }
            pageInfo {
                endCursor
            }
        }
    }

`)