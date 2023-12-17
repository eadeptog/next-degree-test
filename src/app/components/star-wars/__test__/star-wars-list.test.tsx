/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {describe, expect, it} from "@jest/globals";
import * as tlr from "@testing-library/react";
import StarWarsList from "../star-wars-list";
const value = {
    data:{
        "allFilms": {
            "__typename": "FilmsConnection",
            "films": [
                {
                    "__typename": "Film",
                    "id": "ZmlsbXM6MQ==",
                    "director": "George Lucas",
                    "title": "A New Hope",
                    "episodeID": 4,
                    "characterConnection": {
                        "__typename": "FilmCharactersConnection",
                        "characters": [
                            {
                                "__typename": "Person",
                                "name": "Luke Skywalker"
                            },
                            {
                                "__typename": "Person",
                                "name": "C-3PO"
                            },
                            {
                                "__typename": "Person",
                                "name": "R2-D2"
                            },
                            {
                                "__typename": "Person",
                                "name": "Darth Vader"
                            },
                            {
                                "__typename": "Person",
                                "name": "Leia Organa"
                            },
                            {
                                "__typename": "Person",
                                "name": "Owen Lars"
                            },
                            {
                                "__typename": "Person",
                                "name": "Beru Whitesun lars"
                            },
                            {
                                "__typename": "Person",
                                "name": "R5-D4"
                            },
                            {
                                "__typename": "Person",
                                "name": "Biggs Darklighter"
                            },
                            {
                                "__typename": "Person",
                                "name": "Obi-Wan Kenobi"
                            },
                            {
                                "__typename": "Person",
                                "name": "Wilhuff Tarkin"
                            },
                            {
                                "__typename": "Person",
                                "name": "Chewbacca"
                            },
                            {
                                "__typename": "Person",
                                "name": "Han Solo"
                            },
                            {
                                "__typename": "Person",
                                "name": "Greedo"
                            },
                            {
                                "__typename": "Person",
                                "name": "Jabba Desilijic Tiure"
                            },
                            {
                                "__typename": "Person",
                                "name": "Wedge Antilles"
                            },
                            {
                                "__typename": "Person",
                                "name": "Jek Tono Porkins"
                            },
                            {
                                "__typename": "Person",
                                "name": "Raymus Antilles"
                            }
                        ]
                    },
                    "releaseDate": "1977-05-25",
                    "producers": [
                        "Gary Kurtz",
                        "Rick McCallum"
                    ]
                },
                {
                    "__typename": "Film",
                    "id": "ZmlsbXM6Mg==",
                    "director": "Irvin Kershner",
                    "title": "The Empire Strikes Back",
                    "episodeID": 5,
                    "characterConnection": {
                        "__typename": "FilmCharactersConnection",
                        "characters": [
                            {
                                "__typename": "Person",
                                "name": "Luke Skywalker"
                            },
                            {
                                "__typename": "Person",
                                "name": "C-3PO"
                            },
                            {
                                "__typename": "Person",
                                "name": "R2-D2"
                            },
                            {
                                "__typename": "Person",
                                "name": "Darth Vader"
                            },
                            {
                                "__typename": "Person",
                                "name": "Leia Organa"
                            },
                            {
                                "__typename": "Person",
                                "name": "Obi-Wan Kenobi"
                            },
                            {
                                "__typename": "Person",
                                "name": "Chewbacca"
                            },
                            {
                                "__typename": "Person",
                                "name": "Han Solo"
                            },
                            {
                                "__typename": "Person",
                                "name": "Wedge Antilles"
                            },
                            {
                                "__typename": "Person",
                                "name": "Yoda"
                            },
                            {
                                "__typename": "Person",
                                "name": "Palpatine"
                            },
                            {
                                "__typename": "Person",
                                "name": "Boba Fett"
                            },
                            {
                                "__typename": "Person",
                                "name": "IG-88"
                            },
                            {
                                "__typename": "Person",
                                "name": "Bossk"
                            },
                            {
                                "__typename": "Person",
                                "name": "Lando Calrissian"
                            },
                            {
                                "__typename": "Person",
                                "name": "Lobot"
                            }
                        ]
                    },
                    "releaseDate": "1980-05-17",
                    "producers": [
                        "Gary Kurtz",
                        "Rick McCallum"
                    ]
                },
                {
                    "__typename": "Film",
                    "id": "ZmlsbXM6Mw==",
                    "director": "Richard Marquand",
                    "title": "Return of the Jedi",
                    "episodeID": 6,
                    "characterConnection": {
                        "__typename": "FilmCharactersConnection",
                        "characters": [
                            {
                                "__typename": "Person",
                                "name": "Luke Skywalker"
                            },
                            {
                                "__typename": "Person",
                                "name": "C-3PO"
                            },
                            {
                                "__typename": "Person",
                                "name": "R2-D2"
                            },
                            {
                                "__typename": "Person",
                                "name": "Darth Vader"
                            },
                            {
                                "__typename": "Person",
                                "name": "Leia Organa"
                            },
                            {
                                "__typename": "Person",
                                "name": "Obi-Wan Kenobi"
                            },
                            {
                                "__typename": "Person",
                                "name": "Chewbacca"
                            },
                            {
                                "__typename": "Person",
                                "name": "Han Solo"
                            },
                            {
                                "__typename": "Person",
                                "name": "Jabba Desilijic Tiure"
                            },
                            {
                                "__typename": "Person",
                                "name": "Wedge Antilles"
                            },
                            {
                                "__typename": "Person",
                                "name": "Yoda"
                            },
                            {
                                "__typename": "Person",
                                "name": "Palpatine"
                            },
                            {
                                "__typename": "Person",
                                "name": "Boba Fett"
                            },
                            {
                                "__typename": "Person",
                                "name": "Lando Calrissian"
                            },
                            {
                                "__typename": "Person",
                                "name": "Ackbar"
                            },
                            {
                                "__typename": "Person",
                                "name": "Mon Mothma"
                            },
                            {
                                "__typename": "Person",
                                "name": "Arvel Crynyd"
                            },
                            {
                                "__typename": "Person",
                                "name": "Wicket Systri Warrick"
                            },
                            {
                                "__typename": "Person",
                                "name": "Nien Nunb"
                            },
                            {
                                "__typename": "Person",
                                "name": "Bib Fortuna"
                            }
                        ]
                    },
                    "releaseDate": "1983-05-25",
                    "producers": [
                        "Howard G. Kazanjian",
                        "George Lucas",
                        "Rick McCallum"
                    ]
                }
            ],
            "pageInfo": {
                "__typename": "PageInfo",
                "endCursor": "YXJyYXljb25uZWN0aW9uOjI="
            }
        }
    },
    fetchMore:()=>undefined
};
jest.mock('@apollo/client', () => ({
    useQuery: (a,b) => (value as any)
}));
describe('StarWarsList', () => {
    it('renders filters, load more', async () => {
        const rendered = render(
            <StarWarsList />
        )

        await tlr.waitFor(() => rendered.getAllByText('Star wars films' as any));
        const filterButton = rendered.getAllByText('Filters' as any);
        expect(filterButton).toBeDefined()
        const loadMoreButton = rendered.getAllByText('Load more' as any);
        expect(loadMoreButton).toBeDefined()
    })
})