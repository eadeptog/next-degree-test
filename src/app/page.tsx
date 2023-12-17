'use client'
import {useUser} from "@auth0/nextjs-auth0/client";
import * as React from "react";
import {ApolloProvider, gql, useQuery} from "@apollo/client";
import createApolloClient from "@/app/graphql/apollo-client";
import StarWarsList from "@/app/components/star-wars/star-wars-list";
import LandingPage from "@/app/components/home/landing-page";
export default function Home() {
    const { user, error, isLoading } = useUser();
    if(isLoading){
        return (
            <main>
                Loading...
            </main>
        )
    }
    if(error){
        return (
            <main>
                Error loading user data
            </main>
        )
    }
    if(user){
        const client = createApolloClient()
        return (
            <main>
                <>
                    <ApolloProvider client={client}>
                        <StarWarsList></StarWarsList>
                    </ApolloProvider>
                </>
            </main>
        )
    }
  return (
      <LandingPage/>
  )
}
