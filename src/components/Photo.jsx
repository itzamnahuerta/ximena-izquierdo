import React, { Component } from 'react';
import '../styles/Photo.scss';

class Photo extends Component {
  render() {

    const photoInfo = this.props.data;
    
    return (<div>

      {this.props.showPhotoInfo &&  photoInfo !== {} && (
        <div className="photo-container">
        <h2> {photoInfo.portrait} </h2>
        <h5> {photoInfo.location} </h5>
        <p> {photoInfo.personalNote} </p>
        <img src={photoInfo.imgUrl}/>

      </div>
      )}
      </div>
     
    )
  }
}

export default Photo;