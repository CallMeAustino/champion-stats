import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { //whenenver useEffect gets run, add return () => {} which will run prior to useEffect running again
    const fetchItems = async () => {
      const result = await Axios('https://www.breakingbadapi.com/api/characters')
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false);
    }
    fetchItems();
  }, [])


  return (
  <div className='container'>
    <Header />
  </div>
  )
}

export default App;