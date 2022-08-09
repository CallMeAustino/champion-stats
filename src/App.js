import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const mtg = require('mtgsdk');


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => { //whenenver useEffect gets run, add return () => {} which will run prior to useEffect running again
    setIsLoading(true); //test comment
    const fetchItems = async () => {
      const result = await mtg.card.where({name: query})
      console.log(result);
      setItems(result)
      setIsLoading(false);
    }
    fetchItems();
  }, [query])


  return (
  <div className='container'>
    <Header />
    <Search getQuery={(q) => setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
  </div>
  )
}

export default App;