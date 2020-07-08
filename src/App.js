import React, {Component} from 'react';

import './App.css';
import ArtistStatement from './components/ArtistStatement';
import Gallery from './components/Gallery';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayArtistStatement: true
    }

    this.handleArtistStatement = this.handleArtistStatement.bind(this)
  }

  handleArtistStatement() {
    if( this.state.displayArtistStatement === true ) {
      this.setState({ displayArtistStatement: false})
    } else if ( this.state.displayArtistStatement === false) {
      this.setState({ displayArtistStatement: true})
    }
  }


  render() {
    // Wrap the entire app in BrowserRouter to tell app to use router
    return (

        <div className="App">
              <ArtistStatement 
                displayArtistStatement={this.state.displayArtistStatement} 
                handleArtistStatement={this.handleArtistStatement} 
              />
              <Gallery  
                displayArtistStatement={this.state.displayArtistStatement} 
                handleArtistStatement={this.handleArtistStatement} 
              />
        </div>

    )
  }
}


