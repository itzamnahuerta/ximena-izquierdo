import React from 'react';
import '../styles/Main.scss';
import ArtistStatement from './ArtistStatement';
import Gallery from './Gallery';

// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome // for autoplay audio

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistStatementClicked: false,
      currentTitle: "Se Que Fue Así Porque Estuve Allí"
    }
  }


  componentDidMount(){
    setInterval(() => {
      if(this.state.currentTitle == "Se Que Fue Así Porque Estuve Allí"){
        this.setState({currentTitle:"Xime Izquierda"})
      }else if(this.state.currentTitle == "Xime Izquierda"){
        this.setState({currentTitle:"Se Que Fue Así Porque Estuve Allí"})
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
                Artist Statement
              </h3>
          </header>
          
          <Gallery />
        </div>
      )
    }
    }
}

export default Main;
