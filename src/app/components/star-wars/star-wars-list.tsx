'use client'
import {useQuery} from "@apollo/client";
import * as React from "react";
import {useEffect, useState} from "react";
import {Film} from "@/gql/graphql";
import {graphql} from "@/gql";
import Button from "@mui/material/Button";
import StarWarsShort, {TypeView} from "@/app/components/star-wars/star-wars-short";
import {SwipeableDrawer} from "@mui/material";
import Box from "@mui/material/Box";
import {allFilmsWithVariablesQueryDocument} from "@/app/graphql/queries";
import Typography from "@mui/material/Typography";

export default function StarWarsList(){
    const [drawerOpened, setDrawerOpened] = useState(false)
    const [filmDisplayed, setFilmDisplayed] = useState<{film:Film, index:number;} | undefined>(undefined)
    const { data, loading, error, fetchMore } = useQuery(allFilmsWithVariablesQueryDocument, { variables: { first: 3, after: null } })
    useEffect(
        ()=>{
            if(filmDisplayed){
                setDrawerOpened(true)
            }
        },
        [filmDisplayed]
    )
    if(data){
        return (<>

            <Typography className="m-2 lg:py-10" variant="h3" gutterBottom>
                Star wars films
            </Typography>
            <p>You can filter local films</p>
            <div className="grid lg:grid-cols-3 gap-3">
                {data.allFilms?.films?.map(
                    (film:Film | any, index)=>{
                        return <StarWarsShort setFilm={setFilmDisplayed} index={index + 1} key={film?.id} film={film}/>
                    }
                )}
            </div>
            <SwipeableDrawer
                anchor={"bottom"}
                open={drawerOpened}
                onClose={
                    ()=>{
                        setDrawerOpened(false)
                    }
                }
                onOpen={
                    ()=>{
                    }
                }

            >
                <Box
                    role="presentation"
                >
                    {filmDisplayed?.film && filmDisplayed.index
                    && <StarWarsShort type={TypeView.Detail} setDrawerOpened={setDrawerOpened} index={filmDisplayed.index} key={filmDisplayed.index} film={filmDisplayed.film}/>}
                </Box>
            </SwipeableDrawer>
            {data?.allFilms?.pageInfo.endCursor &&
                <Button className="w-full m-5" variant="outlined" color="success" onClick={
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
                }> Load more</Button>
            }
            { data?.allFilms?.pageInfo.endCursor === null &&
            <p className="text-center">No more Films available!</p>}

        </>)
    }
    if(error){
        return (<>
            Error fetching data
        </>)
    }
    return (<>
        Loading...
    </>)
}