import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      champion: null,
      items: [],
      isLoaded: false,
    }
  }


  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = 'https://www.goodreads.com/search.xml?key=jcL5pbHGsfI4UpskBzgxA&q=Ender%27s+Game';

    fetch(proxyUrl+targetUrl)
      .then(res => res.text())
      .then(xml => {
        this.setState({
          isLoaded: true,
          items: xml,
        })
      });
      debugger
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } 
    
    else {
      return (
        <>
        <h1>Hey!</h1>
        </>
      )
    }
  }
}

export default App;