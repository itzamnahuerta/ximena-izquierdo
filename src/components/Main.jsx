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
          <header className="gallery-container"> 
              <div className="project-title">  
               <h3 >{this.state.currentTitle}</h3 >
              </div>
              <div className="nav-container">
              <h3
              className="hover hover-1 index-header"
              onClick={this.handleIndex}
              > index 
              </h3>
              <h3 
                className="hover hover-1 about-header" 
                onClick={this.handleArtistStatement}
              > 
              about
              </h3>
              </div>

          </header>
          
          <Gallery />
        </div>
      )
    }
    }
}

export default Main;
