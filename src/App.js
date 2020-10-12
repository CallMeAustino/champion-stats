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
    fetch('jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } 
    
    else {
      <ul>
        {items.map(item => {
          <li key={item.id}>
            {item}
          </li>
        })}
      </ul>
    return(
      <>
      </>
    )

  }}
}

export default App;