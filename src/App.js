import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import LandingPage from './components/LandingPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLandingPage: true
    }
  }

  handleLandingPage = () => {
    if( this.state.displayLandingPage === true ) {
      this.setState({ displayLandingPage: false})
    } else if ( this.state.displayLandingPage === false) {
      this.setState({ displayLandingPage: true})
    }
  }


  render() {
      if(this.state.displayLandingPage === true) {
        return (
          <React.Fragment>
          <LandingPage 
                handleLandingPage={this.handleLandingPage} 
            />
          </React.Fragment>
        )
      }
      return (
        <div className="App">
              <Main  />
        </div>
    )
  }
}
