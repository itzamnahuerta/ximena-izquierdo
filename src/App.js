import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import ArtistStatement from './components/ArtistStatement';
import Gallery from './components/Gallery';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }


  render() {
    // Wrap the entire app in BrowserRouter to tell app to use router
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ArtistStatement />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}


