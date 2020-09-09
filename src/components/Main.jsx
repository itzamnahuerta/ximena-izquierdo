import React from 'react';
import '../styles/Main.scss';
import ArtistStatement from './ArtistStatement';
import Gallery from './Gallery';

// https://stackoverflow.com/questions/50490304/how-to-make-audio-autoplay-on-chrome // for autoplay audio

class Main extends React.Component {
  render() {
 
    return (
      <div>
        <Gallery />
      </div>
    )
  }
}

export default Main;
