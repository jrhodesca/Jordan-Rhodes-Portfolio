import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from './Header';
import {BrowserRouter} from 'react-router-dom';

describe('#Header', () => {
    beforeEach(() => {
        render(<BrowserRouter><Header /></BrowserRouter>);
    })

    it('should have a symbol', async() => {
        expect(await screen.findByAltText("JR logo")).toBeInTheDocument();
    })

    it('should render logo text', async() => {
        expect(await screen.findByTestId('logo-text')).toBeInTheDocument();
    })

    it('should have a nav-bar', async() => {
        expect(await screen.findByTestId('nav-bar')).toBeInTheDocument();
    })
})
