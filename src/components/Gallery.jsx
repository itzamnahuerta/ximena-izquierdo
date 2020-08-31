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

  handlePhoto = (e) => {
    this.setState({isPhotoClicked:!this.state.isPhotoClicked, photo: e})
    console.log("i am being hitt",e )
  }

  render() {
    let renderPhotos = () => {
      let photos = this.state.data;

      return photos.map((photo, id) => {

        if(this.state.isPhotoClicked === true) {
          return(
            <Photo 
            key={id} 
            isphotoclicked={this.state.isPhotoClicked}
            handlephoto={this.handlePhoto}
            data={this.state.photo} 
          />
          )
        } else {
          return (
            <div 
              key={id} 
              className={photo.className} 
              isphotoclicked={this.state.isPhotoClicked}
              handlephoto={this.handlePhoto}
              // onClick={this.handlePhoto}
              onClick={this.handlePhoto(photo)}
            >
              <ReactImageAppear 
              // onClick={this.handlePhoto(photo)}
              
              isPhotoClicked={this.state.isPhotoClicked}
              src={photo.imgUrl}
              animation="fadeIn"
              animationDuration="1s"
              showLoader={false}
              />
            </div>
          )
        }
      });
    }
    
  
    return (

      <div className="gallery-parent-container">
        {renderPhotos()}
        
      </div>

    )
  }
}
