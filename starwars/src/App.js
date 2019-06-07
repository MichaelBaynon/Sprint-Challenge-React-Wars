import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      isLoaded: false,
    };
  }



  componentDidMount() {

    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          starwarsChars: json.results,
        })
      });
  }



  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }

  // getCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  render() {

    var { isLoaded, starwarsChars } = this.state;

    if (!isLoaded) {
      return <div className='Loading'>Loading...</div>
    }

    else {

      return (
        <div className="App">

          <h1 className="Header">React Wars</h1>

          <ul className='Names'>
            {starwarsChars.map(item => (
              <li key={item.id}>
                Name: {item.name} Height: {item.height} Gender: {item.gender} Birth Year {item.birth_year}
              </li>
            ))};
          </ul>


        </div>

      );
    }
  }
}

export default App;