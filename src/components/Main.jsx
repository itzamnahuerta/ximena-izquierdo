import React from 'react';
import '../styles/Main.scss';
import ArtistStatement from './ArtistStatement';
import Gallery from './Gallery';

// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome // for autoplay audio

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhotoGridClicked : false
    }
  }



  render() {
    if(this.state.isPhotoGridClicked === true) {
      return (
          <div> WE GOOOOOOOD </div>
      )
    } else {
 
      return (
        <div>
          <Gallery />
        </div>
      )
    }
    }
}

export default Main;
