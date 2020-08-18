import React from 'react';
import '../styles/Main.scss';
import ArtistStatement from './ArtistStatement';
import Gallery from './Gallery';

// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome // for autoplay audio

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.contentTitles = ["hello","goodbye"];

    this.state = {
      isArtistStatementClicked: false,
      currentTitle: 0
    }
  }

  changeGalleryTitle = () => {
    setInterval(() => {
      this.setState(state => ({
        ...state,
        currentTitle: (state.currentTitle + 1) % this.contentTitles.length
      }));
    }, 500);
    // console.log((this.state.currentTitle + 1) % this.contentTitles.length)

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
              {/* <div className="gallery-title">  
                {this.contentTitles.map((item, id) => (
                  <span 
                    key={item}
                    className={id === this.state.currentTitle ? 'select-item active' : 'select-item'}
                    > 
                    {item} 
                  </span>
                ))}
              </div> */}

              <div className="artist-statement-header" onClick={this.handleArtistStatement}> Artist Statement</div>
          </header>
          <Gallery />
        </div>
      )
    }
    }
}

export default Main;
