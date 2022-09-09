import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

it("renders search component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search></Search>, div);
})

it("does not remove cards upon clearing search field", () => {
    //Refresh does not trigger upon changing Search state hook (text).
    
    //Set Search state (text) to "Black Lotus", trigger doneTyping, confirm CharacterGrid contains 4 CharacterItems.
    //Modify Search state to "", confirm CharacterGrid still contains 4 identical CharacterItems.

    //This test seems to touch on two different components (Search and CharacterGrid) I read something about being able to test
    //whether one of the component functions is called. Run setText and ensure doneTyping is not ran. 
    })