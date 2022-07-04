import React from 'react';
//removes components from DOM to prevent memory leaking, as well as variable/data collisions between tests
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//after each test, remove leftover memory data
afterEach(cleanup);

describe('About component', () => {
    //first test
    it('renders', () => {
        render(<About />)
    })


    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot()
    })
})