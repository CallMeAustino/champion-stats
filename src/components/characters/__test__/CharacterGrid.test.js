import React from 'react';
import ReactDOM from 'react-dom';
import CharacterGrid from '../../characters/CharacterGrid';
import CharacterItem from '../../characters/CharacterItem';
import Search from '../../ui/Search';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

describe('<CharacterGrid>', () => {
    it('renders <CharacterItem /> components', () => {
      const items = [{multiverseid: 100, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 200, imageUrl:"www.google.com", name: "ABC", text: "TestString"},
      {multiverseid: 300, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 400, imageUrl:"www.google.com", name: "ABC", text: "TestString"}]
      const wrapper = shallow(<CharacterGrid items={items}/>);
      expect(wrapper.find(CharacterItem).length).toBe(4);
    });
});

it("correctly parses out cards with no images", () => {

    const items = [{multiverseid: 100, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 200, imageUrl:"www.google.com", name: "ABC", text: "TestString"},
    {multiverseid: 300, imageUrl:"www.google.com", name: "ABC", text: "TestString"},{multiverseid: 400, imageUrl:"www.google.com", name: "ABC", text: "TestString"},
    {multiverseid: 500, imageUrl:undefined, name: "ABC", text: "TestString"},{multiverseid: 600, imageUrl:undefined, name: "ABC", text: "TestString"},
    {multiverseid: 700, imageUrl:undefined, name: "ABC", text: "TestString"},{multiverseid: 800, imageUrl:undefined, name: "ABC", text: "TestString"},
    {multiverseid: 900, imageUrl:undefined, name: "ABC", text: "TestString"}]
    const wrapper = shallow(<CharacterGrid items={items}/>);
    expect(wrapper.find(CharacterItem).length).toBe(4);
  });
