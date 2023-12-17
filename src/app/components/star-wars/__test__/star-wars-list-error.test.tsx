/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {describe, expect, it} from "@jest/globals";
import * as tlr from "@testing-library/react";
import StarWarsList from "../star-wars-list";
const value = {
    error:{
        message:'something'
    }
};
jest.mock('@apollo/client', () => ({
    useQuery: () => (value as any)
}));
describe('StarWarsList', () => {
    it('renders error', async () => {
        const rendered = render(
                <StarWarsList />
        )

        await tlr.waitFor(() => rendered.getAllByText('Error fetching data' as any));
    })
})