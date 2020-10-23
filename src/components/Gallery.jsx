import React, { Component } from 'react';
import Photo from './Photo'; 
import { LazyLoadImage, trackWindowScroll } 
  from 'react-lazy-load-image-component';
import '../styles/Gallery.scss';
import data from '../assets/data/data';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      isPhotoClicked: false,
      photo: {}
    }
  }

  handlePhoto = (photoData) => {
    this.setState({isPhotoClicked:true, photo: photoData})
  }

  render() {
    const {scrollPosition} = this.props;

    let photos = this.state.data;
    let photoArr = [];
    if (photos) {
      photos.map( (photo, id) => {
        photoArr.push(
          <div 
            key={id} 
            className={photo.className} 
            onClick={() => {this.handlePhoto(photo)}}
          >
          <LazyLoadImage 
            isPhotoClicked={this.state.isPhotoClicked}
            alt={photo.portrait}
            src={photo.imgUrl}
            effect="opacity"
          />
          </div>
        )
      });
    }

    if(this.state.isPhotoClicked === true) {
      return(
        <Photo
          showPhotoInfo={this.state.isPhotoClicked}
          handlephoto={this.handlePhoto}
          data={this.state.photo} 
          scrollPosition={scrollPosition}
        />
      )
    } else {
      return (
        <div className="gallery-parent-container">
          {!this.state.isPhotoClicked && (
            photoArr
          )}
        </div>
      )
    }
  }
}


export default trackWindowScroll(Gallery);