/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import * as tlr from '@testing-library/react'
import {render} from '@testing-library/react'
import {describe, expect, it} from "@jest/globals";
import StarWarsShort, {TypeView} from "../star-wars-short";

const value = {
    film:{
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
        }
};
describe('StarWarsShort', () => {
    it('renders filters, load more', async () => {
        const rendered = render(
            <StarWarsShort index={1}
                           setFilm={()=> undefined as any}
                           film={value.film as any}
                           type={TypeView.Short}
                           setDrawerOpened={()=>undefined as any}
            />
        )

        await tlr.waitFor(() => rendered.getAllByText('A New Hope' as any));
        const title = rendered.getAllByText('George Lucas' as any);
        expect(title).toBeDefined()
    })
    it('renders filters, load more', async () => {
        const rendered = render(
            <StarWarsShort index={1}
                           setFilm={()=> undefined as any}
                           film={value.film as any}
                           type={TypeView.Detail}
                           setDrawerOpened={()=>undefined as any}
            />
        )

        await tlr.waitFor(() => rendered.getAllByText('A New Hope' as any));
        const title = rendered.getAllByText('George Lucas' as any);
        expect(title).toBeDefined()
        const releaseDate = rendered.getAllByText('1977-05-25' as any);
        expect(releaseDate).toBeDefined()
        const episodeId = rendered.getAllByText('4' as any);
        expect(episodeId).toBeDefined()
        const producer = rendered.getAllByText('- Gary Kurtz' as any);
        expect(producer).toBeDefined()
    })
})