import React, { Component } from 'react';
import Photo from './Photo'; 
import ReactImageAppear from 'react-image-appear';
import '../styles/Gallery.scss';
import data from '../assets/data/data';

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      isPhotoClicked: false,
      photo: {}
    }
  }

  handlePhoto = (photoData) => {
    this.setState({isPhotoClicked:!this.state.isPhotoClicked, photo: photoData})
  }

  render() {
    let photos = this.state.data;
    let photoArr = [];
    if (photos) {
      photos.map( (photo, id) => {
      photoArr.push(
          <div 
            key={id} 
            className={photo.className} 
            onClick={(e) => {this.handlePhoto(photo)}}
          >
            <ReactImageAppear 
            
            isPhotoClicked={this.state.isPhotoClicked}
            src={photo.imgUrl}
            animation="fadeIn"
            animationDuration="1s"
            showLoader={false}
            />
          </div>
        )
      }
    )
 }
    
    
  
    return (

      <div className="gallery-parent-container">
        {!this.state.isPhotoClicked && (
          photoArr
        )}   

        {this.state.isPhotoClicked && (
          <Photo
            showPhotoInfo={this.state.isPhotoClicked}
            handlephoto={this.handlePhoto}
            data={this.state.photo} 
            />
        )}
      </div>

    )
  }
}
