import React from 'react'
import data from '../assets/data/data';

function Index(props) {
  let photos = data;
  let photoArr = [];
  if (photos) {
    photos.map( (photo, id) => {
      photoArr.push(
        <div 
          key={id} 
        >
          <h4> {photo.portrait} </h4>
          <div className="line"></div>
          <h4> {photo.date}</h4>
        </div>
      )
    });
  }
  return (
    <div>
      {photoArr}

      <button id="btn-icon" onClick={props.handleIndex} > 
        <div class="arrow"></div>
      </button>
    </div>
  )
}

export default Index
