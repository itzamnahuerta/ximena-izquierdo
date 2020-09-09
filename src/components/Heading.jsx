import React, { Component } from 'react'
import ArtistStatement from './ArtistStatement'
export default class Heading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistStatementClicked: false,
      currentTitle: "se que fue así porque estuve allí"
    }
  }
  componentDidMount(){
    setInterval(() => {
      if(this.state.currentTitle == "se que fue así porque estuve allí"){
        this.setState({currentTitle:"xime izquierdo ugaz"})
      }else if(this.state.currentTitle == "xime izquierdo ugaz"){
        this.setState({currentTitle:"se que fue así porque estuve allí"})
      }
    }, 1000);
  }

  handleArtistStatement = () => {
    this.setState({isArtistStatementClicked:!this.state.isArtistStatementClicked})
  }

  render() {
    if(this.state.isArtistStatementClicked === true) {
      return (
        <ArtistStatement
            isArtistStatementClicked={this.state.isArtistStatementClicked}
            handleArtistStatement={this.handleArtistStatement}
          />
      )
    } else {
      return (
        <div>
          <header className="gallery-header"> 
            <div className="gallery-title">  
              <h3 >{this.state.currentTitle}</h3 >
            </div>
            <h3 
            className="artist-statement-header" 
            onClick={this.handleArtistStatement}
            > 
            about
            </h3>
          </header>
        </div>
      )
    }
  }
}