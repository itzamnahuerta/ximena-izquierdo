import React, { Component } from 'react';
import '../styles/Gallery.scss'
import data from '../assets/data/data';

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      data: data
    }
  }



  render() {
    let renderPhotos = () => {
      let photos = this.state.data;
      return photos.map((photo, id) => (
        <div key={id} className="photo-card" >
          <img src={photo.imgUrl}/>
        </div> 
      ));
    }
  
    return (

      <div className="gallery-container">
        {renderPhotos()}
      </div>

    )
  }
}
