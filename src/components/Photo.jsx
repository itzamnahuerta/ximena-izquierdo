import React, { PureComponent } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';
import { GrLocationPin } from 'react-icons/gr';
import '../styles/Photo.scss';

// whenever you call setstate, rerendering would happen blindly = solved issue: pure component stopped rerendering 42 times once we transitioned it into pure component, would like to update this into a functional component and test out the results as well. 

class Photo extends PureComponent {
  render() {
    console.log("from photo component")

    const photoInfo = this.props.data;
    
    return (
      <div style={{display:"block"}}>
        {this.props.showPhotoInfo &&  photoInfo !== {} && (
          <div className="photo-container">

            <div className="flex-item wrapper-1"> 
              <span className="portrait-title"> {photoInfo.portrait} </span>
            </div>

            <div className="flex-item wrapper-2"> 
              <h5 className="location-content"> 
              <GrLocationPin/>
                {/* <img 
                  className="location-marker" 
                  width={"30px"} 
                  height={"20px"} 
                  src="https://img.icons8.com/carbon-copy/100/000000/map-pin.png"
                /> */}
                {photoInfo.location} 
              </h5>


              <div className="portrait-img"> 
                <img
                    src={photoInfo.imgUrl} 
                    alt={photoInfo.portrait} 
                />
              </div>

              <div> 
              <p className="personal-note"> {photoInfo.personalNote} </p>
              </div>
            </div>



            <div className="flex-item wrapper-3"> 
              <h2 className=" date"> {photoInfo.date} </h2>
            </div>

            <div className="flex-item wrapper-4"> 
              <div 
                className="icon gallery" 
              > 
                <BorderAllOutlinedIcon/>

              </div>

              <div  
                className="icon audio-play" 
              > 
                <audio autoPlay src={photoInfo.audioUrl} type="audio/mp4"  >
                </audio>
                <PlayCircleFilledIcon/>              
              </div> 
            </div>
        </div>
      )}
    </div>

    )
  }
}

export default Photo;