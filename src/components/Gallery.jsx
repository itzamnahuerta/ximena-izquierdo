import React, { Component, Suspense } from 'react';
import ReactImageAppear from 'react-image-appear';

import '../styles/Gallery.scss'
import data from '../assets/data/data';

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
    }
  }



  render() {
    let renderPhotos = () => {
      let photos = this.state.data;

      return photos.map((photo, id) => {
        
          return (

            <div key={id} className={photo.className} >
              
              <ReactImageAppear 
              src={photo.imgUrl}
              animation="fadeIn"
              animationDuration="1s"
              showLoader={false}
              />

            </div> 
          )
      });
    }
    
  
    return (

      <div className="gallery-parent-container">
        {renderPhotos()}
      </div>

    )
  }
}
