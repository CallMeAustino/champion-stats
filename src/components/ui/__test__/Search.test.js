import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';
import App from '../../../App';
import CharacterGrid from '../../characters/CharacterGrid';
import CharacterItem from '../../characters/CharacterItem';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

describe('<CharacterGrid>', () => {
    it('renders Four <CharacterItem /> components', () => {
      const items = [{multiverseid: 200, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 300, imageUrl:"www.google.com", name: "ABC", text: "TestString"},
      {multiverseid: 400, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 500, imageUrl:"www.google.com", name: "ABC", text: "TestString"}]
      const wrapper = shallow(<CharacterGrid items={items}/>);
      expect(wrapper.find(CharacterItem).length).toBe(4);
    });
});

it("renders search component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search></Search>, div);
})

it("correctly parses out cards with no images", () => {
//if the image URL is undefined, the card should not appear on the characterGrid
//"Black Lotus" should return 9 cards, and omit 5 cards. (9 total, 5 filtered out)

//Set App Query to "Black Lotus" --> Triggers rerender.
//Verify that the items array that's sent to CharacterGrid as a prop contains 9 items.
//Verify that once CharacterGrid renders, the # of CharacterItems components rendered is "4".

})

it("does not remove cards upon clearing search field", () => {
//Refresh does not trigger upon changing Search state hook (text).

//Set Search state (text) to "Black Lotus", trigger doneTyping, confirm CharacterGrid contains 4 CharacterItems.
//Modify Search state to "", confirm CharacterGrid still contains 4 identical CharacterItems.
})

//Current hangups:
//Unsure of whether I should be trying to test these components individually abstractly, e.g testing the Search component independent of the CharacterGrid component
//Or if I should just be reading final rendered output given some state input. 
//I think this test folder should be in a different location since I'm testing all of the components in this file now...
//