import React from 'react';
import {render, screen} from '@testing-library/react'
import NavBar from './NavBar';
import {BrowserRouter} from 'react-router-dom';

describe('#NavBar', () => {

    beforeEach(() => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
    })

    it('should have a work link', async() => {
        expect(await screen.findByText("Work")).toBeInTheDocument();
    })

    it('should have an about link', async() => {
        expect(await screen.findByText('About')).toBeInTheDocument();
    })
})
