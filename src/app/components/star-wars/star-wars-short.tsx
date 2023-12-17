'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import {Film} from "@/gql/graphql";
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
export enum TypeView{
    Short,
    Detail
}
export interface StarWarsShortProps{
    film: Film;
    type?: TypeView;
    index: number;
    setFilm?: (value: (((prevState: ({film: Film, index: number} | undefined)) => ({film: Film, index: number} | undefined)) | {film: Film, index: number} | undefined)) => void
    setDrawerOpened?: (value: (((prevState: boolean) => boolean) | boolean)) => void
}
export default function StarWarsShort(
    props: StarWarsShortProps
){
    const {type, film, index, setFilm, setDrawerOpened} = props;
    if(type === TypeView.Detail){
        return (<>
            <Card  className="m-3 w-full">
                <CardMedia
                    sx={{ height: 740, width:400, marginLeft: 'auto', marginRight: 'auto'}}
                    image={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${index}.jpg`}
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {film.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p><span className="font-bold">Director:</span>{film.director}</p>
                        <p><span className="font-bold">Release date:</span>{film.releaseDate}</p>
                        <p><span className="font-bold">Episode ID:</span>{film.episodeID}</p>
                        <p><span className="font-bold">Producers:</span></p>
                        <ul>
                            {film.producers?.map(
                                (producer) => {
                                    return <li key={producer}>- {producer}</li>
                                }
                            )}
                        </ul>
                        <p><span className="font-bold">Characters:</span></p>
                        <ul>
                            {film.characterConnection?.characters?.map(
                                (character) => {
                                    return <li key={character?.name}>- {character?.name}</li>
                                }
                            )}
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="w-full m-5" variant="outlined" color="secondary" onClick={
                        ()=>{
                            if(setDrawerOpened) {
                                setDrawerOpened(false)
                            }
                        }
                    }>Close</Button>
                </CardActions>
            </Card>
        </>)
    }
    return (<>
        <Card  className="m-3 w-full">
            <CardMedia
                sx={{ height: 370 }}
                image={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${index}.jpg`}
                title=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {film.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {film.director}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={
                    ()=>{
                        if(setFilm){
                            setFilm({film, index})
                        }
                    }
                }>Learn More</Button>
            </CardActions>
        </Card>
    </>)
}