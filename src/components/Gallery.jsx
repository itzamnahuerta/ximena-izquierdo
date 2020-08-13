import React from 'react';
import '../styles/Gallery.scss'
import ArtistStatement from '../components/ArtistStatement'


// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome // for autoplay audio


class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArtistStatementClicked: false
    }
  }

  handleArtistStatement = () => {
    this.setState({isArtistStatementClicked:!this.state.isArtistStatementClicked})
    console.log("i was hit to move the artist statement")
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
          <header> 
              <div id="a-s-header" onClick={this.handleArtistStatement}> Artist Statement</div>
          </header>
        </div>
      )
    }
    }
}

export default Gallery;
