import React, { PureComponent } from 'react';
import Gallery from './Gallery';
import '../styles/Gallery.scss';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';
import '../styles/Photo.scss';
import AudioPlayer from 'react-h5-audio-player';


class Photo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isGalleryIconClicked: false,
      playAudio: true
    }
  }

  handleGalleryIcon = () => {
    this.setState({isGalleryIconClicked:!this.state.isGalleryIconClicked})
    console.log("clickkkked gallery icon")
  }

  render() {
    const photoInfo = this.props.data;
    
    if(this.state.isGalleryIconClicked === true) {
      return (
        <Gallery />
      )
    } else {
      return (
        <div >
          {this.props.showPhotoInfo &&  photoInfo !== {} && (
            <div className="photo-container">
              <div className="wrapper-0"> 
                <div 
                  className="icon gallery"
                  
                > 
                <BorderAllOutlinedIcon 
                  onClick={this.handleGalleryIcon}
                  style={{fontSize:"2em"}} 
                  />
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
                      <span className="icon audio"> 
                        <AudioPlayer
                                className="audio-player"
                                autoPlay={false}
                                src={photoInfo.audioUrl}
                                onPlay={e => console.log("onPlay")}
                         
                        />
                      </span>  
                    </h1>
  
          
                  </div> 
                  <div className="c-2"> 
                    <div dangerouslySetInnerHTML={{ __html: photoInfo.personalNote }} />
                    {/* <p className="personal-note"> {photoInfo.personalNote} </p> */}
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
}

export default Photo;