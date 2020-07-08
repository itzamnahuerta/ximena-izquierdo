import React from 'react';

function Gallery(props) {
  return (
    <div>
      <button onClick={props.handleArtistStatement}> Artist Statement </button>
      
      <h1> I Gallery, who you? </h1>

    </div>
  )
}

export default Gallery
