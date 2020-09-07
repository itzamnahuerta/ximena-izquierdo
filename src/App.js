import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import LandingPage from './components/LandingPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLandingPage: true,
      displayReadMore: false,
      lang: 'en'
    }
  }

  handleLandingPage = () => {
    if( this.state.displayLandingPage === true ) {
      this.setState({ displayLandingPage: false})
    } else if ( this.state.displayLandingPage === false) {
      this.setState({ displayLandingPage: true})
    }
  }

  handleReadMore = () => {
    if( this.state.displayReadMore === true ) {
      this.setState({ displayReadMore: false})
    } else if ( this.state.displayReadMore === false) {
      this.setState({ displayReadMore: true})
    }
  }

  toEs = () => {
    this.setState({lang: 'es'})
    // console.log("this is espanolll copio")
  }
  
  toEng = () => {
    this.setState({lang:'en'})
    // console.log("this is englishhhh okuurrr")
  }

  render() {
      if(this.state.displayLandingPage === true) {
        return (
          <React.Fragment>
          <LandingPage 
                handleLandingPage={this.handleLandingPage} 
                handleReadMore={this.handleReadMore}
                displayReadMore={this.state.displayReadMore}
                lang={this.state.lang}
                toEs={this.toEs}
                toEng={this.toEng}
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
