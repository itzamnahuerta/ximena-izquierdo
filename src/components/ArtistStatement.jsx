import React, { Component } from 'react'
import '../styles/ArtistStatement.scss'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

export default class ArtistStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'en'
    }
  }

  toEs = () => {
    this.setState({lang: 'es'})
  }
  
  toEng = () => {
    this.setState({lang:'en'})
  }

  render() {
    
    return (
      <div 
        className={this.props.isArtistStatementClicked === true ? "open-artist-statement" : "close-artist-statement"}
      >
        <div className="parent-container"> 
          <div className="flex-container">
            <div className="a-s-h"> 
              <h1> Se Que Fue Así Porque Estuve Allí </h1> 
              <button id="btn-icon" onClick={this.props.handleArtistStatement} > 
                <HiOutlineArrowNarrowLeft style={{fontSize:"2em"}}/>
            
              </button>
            </div>

            <div className="a-s-c"> 

              {this.state.lang === "es" && (
                <div> 
                    De peque, mi madre no dejaba que nadie se sentara en mi cama. Decía que era un lugar sagrado. Cuando llegaban mis amigues, teníamos que sentarnos en la sala desde donde ella nos podía ver. A medida que crecía, me di cuenta de lo diferente que nos sentíamos acerca de lo sagrado. Ya de adolescente y en busca de espejos, buscando familia, viví en muchos hogares. Durante mucho tiempo, fui demasiado tímide para tomar fotografías de las personas que me rodeaban. Tomé muchas fotos de nuestras cosas, la sala que compartía con mis roomates, el baño donde nos preparamos para enfrentar un mundo que nos odiaba, cocinas, camas, ventanas.
                    <br/> 
                    <br/> 
                    Hace casi 3 años, comencé a hacer retratos de mi familia elegida. Comenzó como un archivo para mí, para recordarme a mí misme los seres increíbles que me han rodeado, nutrido y amado de formas para las que a veces ni siquiera estaba preparade. Empecé a preguntar si podía tomar los retratos de mi familia. Verás, es una gran responsabilidad capturar un segundo de aquellxs que han sido tus hermanes y tus madres cuando todavía estabas tratando de averiguar qué significaba familia. 
                    <br/> 
                    <br/> 
                    La fotografía tiene una historia y un presente de ser utilizada como herramienta para la vigilancia de personas racializadas, y tenemos el deber de contravigilar. En un momento en el que la extracción y la muerte están tan presentes en nuestras comunidades, esta serie ha sido mi manera de documentar la cotidianidad de nuestras vidas y nuestra resiliencia, y para mostrar la belleza que veo en mis momentos más íntimos con todes mis hermanxs feroces, hermoses, Negres y Marronxs, Maricas y Trans. En los siguientes retratos escucharás y leerás las voces de todes en primera persona, se les pidió que respondieran a la pregunta, "¿cómo describirías a la persona en este retrato?"
                    <br/> 
                    <br/> 
                    Esta es una carta de amor para nosotres, para mi familia elegida como los universos que cada une es, en nuestra vida. Son nuestras vidas las que son sagradas, las formas en que nos vemos a nosotres mismxs, las formas en que nos permitimos ser. Veo cada retrato de esta serie como un retrato de mí misme también, porque estuve allí.
                </div>
              )}

              {this.state.lang === "en" && (
                <div> 
                  Growing up my mom wouldn’t let anyone sit on my bed. She said it was a sacred place. When friends came over we would have to sit in the living room with her watching nearby. As I grew, it became clear to me how differently we felt about sacredness. As a teenager looking for mirrors, searching for family, I lived in many homes. For a long time, I was too shy to take photographs of the people around me. I took lots of pictures of our things, the living room my roommates and I shared, the bathroom where we got ready to face a world that hated us, kitchens, beds, windows. 
                  <br/>
                  <br/>
                  Almost 3 years ago, I started taking portraits of my chosen family. It started as an archive for me, to remind myself of the incredible beings that have surrounded me, nurtured me and loved me in ways that I sometimes wasn’t even ready for. I started asking if I could take my fam’s portraits. It’s a big responsibility you see, to capture a second of those that have been your siblings and your mothers when you were still trying to figure out what family meant. 
                  <br/>
                  <br/>
                  Photography has a history and a present of being used as a tool for surveillance of Black and Brown people, and we have a duty to countersurveille. In a moment in which extraction and death is so present in our communities, this series has been my way to document the everydayness of our lives and our resilience, and to showcase the beauty that I see in my most intimate moments with all of my fierce, gorgeous, Black & Brown, queer and trans kin. In the following portraits you will hear and read the voices of everyone in first person, they were asked to respond to the prompt, “how would you describe the person in this portrait?”
                  <br/>
                  <br/>
                  This is a love letter to us, to my chosen family as the universes that they each are, in our lifetime. It is our lives that are sacred, the ways in which we see ourselves, and each other, the ways we allow ourselves to just be. I see every portrait in this series as a portrait of myself as well, because I was there. 
                  <br/>
                  <br/>
                </div>
              )}
            </div>
            <div> 
                <a 
                  className="lang" 
                  onClick={this.toEng} > EN </a>
                | 
                <a 
                  className="lang" 
                  onClick={this.toEs}> ES </a>
              </div> 
            <div className="more-info"> 
              <p> For more information about this project you can visit www.ximexime.com or email ximeizquierdougaz@gmail.com. </p>
              <p> Website coded by Itzamna Huerta</p>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

