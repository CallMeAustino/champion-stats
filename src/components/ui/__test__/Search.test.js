import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';
import { render } from '@testing-library/react';

it("renders search component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search></Search>, div);
})

it("correctly parses out cards with no images", () => {
//if the image URL is undefined, the card should not appear on the characterGrid
//input "Black Lotus" should return 4 cards, and omit 4 cards. (8 total, 4 filtered out)
})

it("does not remove cards upon clearing search field", () => {
//Refresh does not trigger upon changing Search state hook
})