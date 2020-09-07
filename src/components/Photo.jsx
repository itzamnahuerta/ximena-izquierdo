import React, { PureComponent } from 'react';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';
import { AiTwotoneSound } from 'react-icons/ai'
import PauseIcon from '@material-ui/icons/Pause';
import '../styles/Photo.scss';

// whenever you call setstate, rerendering would happen blindly = solved issue: pure component stopped rerendering 42 times once we transitioned it into pure component, would like to update this into a functional component and test out the results as well. 

class Photo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isGalleryIconClicked: false
    }
  }

  handleArtistStatement = () => {
    this.setState({isGalleryIconClicked:!this.state.isGalleryIconClicked})
  }

  render() {
    const photoInfo = this.props.data;
    
    return (
      <div>
        {this.props.showPhotoInfo &&  photoInfo !== {} && (
          <div className="photo-container">

            <div className="wrapper-0"> 
              <div className="icon gallery" > 
              <BorderAllOutlinedIcon style={{fontSize:"2em"}} />
              </div>
            </div>

            <div className="portrait-img"> 
              <img
                  src={photoInfo.imgUrl} 
                  alt={photoInfo.portrait} 
              />
            </div>

            <div className="content"> 

              <div className="wrapper-1">
                <div className="c-1">
                  <h1 className="portrait-title"> 
                    {photoInfo.portrait}  
                    <span className="icon audio-play"> 
                      {/* <audio autoPlay src={photoInfo.audioUrl} type="audio/mp4"></audio>  */}
                      <AiTwotoneSound/>               
                    </span>  
                  </h1>

        
                </div> 
                <div className="c-2"> 
                  <p className="personal-note"> {photoInfo.personalNote} </p>
                </div>
              </div>

              <div className="wrapper-2">
                <h3 className="location-content">{photoInfo.location}</h3>
                <h3 className=" date"> {photoInfo.date} </h3>
              </div>
            </div> 
    
          </div> 
      )}
    </div>
    )
  }
}

export default Photo;