import React from 'react';
import '../styles/Main.scss';
import ArtistStatement from './ArtistStatement';
import Gallery from './Gallery';
import Index from './Index';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistStatementClicked: false,
      isIndexClicked: false,
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

  handleIndex = () => {
    this.setState({isIndexClicked:!this.state.isIndexClicked})
  }

  render() {
    if(this.state.isArtistStatementClicked === true) {
      return (
        <ArtistStatement
            isArtistStatementClicked={this.state.isArtistStatementClicked}
            handleArtistStatement={this.handleArtistStatement}
          />
      )
    } else  if(this.state.isIndexClicked) {
      return(
        <Index
          isIndexClicked={this.state.isIndexClicked}
          handleIndex={this.handleIndex}
        />
      )
    }  else {
 
      return (
        <div>
          <header className="gallery-header"> 
              <div className="gallery-title">  
               <h3 >{this.state.currentTitle}</h3 >
              </div>
              
              {/* <div
                className="index-header"
                onClick={this.handleIndex}
              > index 
              </div> */}
              <h3 
                className="artist-statement-header" 
                onClick={this.handleArtistStatement}
              > 
                about
              </h3>
          </header>
          
          <Gallery />
        </div>
      )
    }
    }
}

export default Main;
