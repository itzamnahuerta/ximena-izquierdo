import React, { Component } from 'react'
import '../styles/ArtistStatement.scss'


// className={this.props.isArtistStatementClicked === true ? "display-artist-statement" : "close-artist-statement"}  =====> for classname display artist

export default class ArtistStatement extends Component {
  render() {
    
    return (
      <div className={this.props.isArtistStatementClicked === true ? "open-artist-statement" : "close-artist-statement"}>
        <div className="parent-container"> 
        <div className="flex-container"> 
          <h1> Se Que Fue Así Porque Estuve Allí </h1>
            <p>
              Growing up my mom wouldn’t let anyone sit on my bed. She said it was a sacred place. When friends came over we would have to sit in the living room with her watching nearby. As I grew, it became clear to me how differently we felt about sacredness. As a teenager looking for mirrors, searching for family, I lived in many homes. For a long time, I was too shy to take photographs of the people around me. I took lots of pictures of our things, the living room my roommates and I shared, the bathroom where we got ready to face a world that hated us, kitchens, beds, windows. Almost 3 years ago, I started taking portraits of my chosen family. It started as an archive for me, to remind myself of the incredible beings that have surrounded me, nurtured me and loved me in ways that I sometimes wasn’t even ready for. I started asking if I could take my fam’s portraits. It’s a big responsibility you see, to capture a second of those that have been your siblings and your mothers when you were still trying to figure out what family meant. In a moment in which extraction is so present in our communities, this series Se Que Fue Así Porque Estuve Allí (I know it was so, I was there) has been my way of loving on my chosen family. Of showcasing the beauty that I am held by and that I see in my most intimate moments with all of my fierce, gorgeous, Black & Brown, queer and trans kin. It is our lives that are sacred, the ways in which we see ourselves, and each other, the ways we allow ourselves and each other to be. I see every portrait in this series as a portrait of myself as well, because I was there. 
            </p>
            <p> 
              [This project is by artist Xime Izquierdo Ugaz and commissioned by El Museo del Barrio for ESTAMOS BIEN: LA TRIENAL 20/21 curated by Elia Alba, Susanna Temkin, and Rodrigo Moura.]
            </p>
        
          <button id="btn-icon" onClick={this.props.handleArtistStatement} > 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
          </button>
        </div>
      </div>
    </div>
    )
  }
}

