/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {describe, expect, it} from "@jest/globals";
import * as tlr from "@testing-library/react";
import {UserProvider, useUser} from '@auth0/nextjs-auth0/client';
import Login from "../login";
const value = {
};
jest.mock('@auth0/nextjs-auth0/client', () => ({
    useUser: () => (value as any)
}));
describe('Login', () => {
    it('renders Login', async () => {
        const rendered = render(
                <Login />

        )

        await tlr.waitFor(() => rendered.getAllByText('Login' as any));
    })
})