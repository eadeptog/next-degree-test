/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import {describe, it} from "@jest/globals";
import * as tlr from "@testing-library/react";
import LandingPage from "../landing-page";
describe('LandingPAge', () => {
    it('renders welcome', async () => {
        const rendered = render(
                <LandingPage />

        )
        await tlr.waitFor(() => rendered.getAllByText('Welcome to the fake academy of Star Wars' as any));
    })
    it('renders login', async () => {
        const rendered = render(
            <LandingPage />

        )
        await tlr.waitFor(() => rendered.getAllByText('Login' as any));
    })
})