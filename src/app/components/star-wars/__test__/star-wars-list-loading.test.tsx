/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {describe, expect, it} from "@jest/globals";
import * as tlr from "@testing-library/react";
import StarWarsList from "../star-wars-list";
const value = {
};
jest.mock('@apollo/client', () => ({
    useQuery: () => (value as any)
}));
describe('StarWarsList', () => {
    it('renders loading', async () => {
        const rendered = render(
                <StarWarsList />
        )

        await tlr.waitFor(() => rendered.getAllByText('Loading...' as any));
    })
})