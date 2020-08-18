import React, { Component } from 'react';
import '../styles/Gallery.scss'
import data from '../assets/data/data';



const col1 = [];
const col2 = [];
const col3 = [];
const col4 = [];
const col5 = [];
const col6 = [];
const col7 = [];
const col8 = [];
const col9 = [];
const col10 = [];
const col11 = [];
const col12 = [];
const col13 = [];
const col14 = [];
const col15 = [];
const col16 = [];
const col17 = [];
const col18 = [];
const col19 = [];
const col20 = [];
const col21 = [];
const col22 = [];
const col23 = [];

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
