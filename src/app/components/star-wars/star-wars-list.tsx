'use client'
import {ApolloProvider, gql, useQuery} from "@apollo/client";
import * as React from "react";
import {Film, FilmsConnection, GetFilmsWithCharactersAndDirectorsQuery} from "@/gql/graphql";
import {graphql} from "@/gql";
import {useState} from "react";
import Button from "@mui/material/Button";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
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
export default function StarWarsList(){
    const { data, loading, error, fetchMore } = useQuery(allFilmsWithVariablesQueryDocument, { variables: { first: 1, after: null } })
    if(data){
        console.log(data);
        return (<>
            <ul>
                {data.allFilms?.films?.map(
                    (film)=>{
                        return <li key={film?.id}> {film?.title}</li>
                    }
                )}
            </ul>
            <Button onClick={
                ()=>{
                    fetchMore({
                        variables: { first: 1, after: data?.allFilms?.pageInfo.endCursor },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;

                            const films = [...prev.allFilms?.films as any, ...fetchMoreResult?.allFilms?.films as any]
                            return {
                                allFilms:{
                                    films,
                                    pageInfo: fetchMoreResult?.allFilms?.pageInfo,
                                    __typename: prev.allFilms?.__typename
                                },
                                __typename: prev.__typename
                            } as any
                        }
                    })
                }
            }> more</Button>
        </>)
    }
    return (<>
        Loading...
    </>)
}