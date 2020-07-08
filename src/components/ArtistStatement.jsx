import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom';


export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      displayModal: false
    })
    console.log("it clicked")
  }



  render() {
    return (
      <div className="artist-statement-modal">
      <h1> Project Title </h1>
      <h2> Ximena Izquierdo </h2>
      <p>
        Bring your owner a dead bird pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now but grab pompom in mouth and put in water dish, for fall over dead (not really but gets sypathy) scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in, for do not try to mix old food with new one to fool me!, yet leave fur on owners clothes. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? sit by the fire meow and walk away cat dog hate mouse eat string barf pillow no baths hate everything so there's a forty year old lady there let us feast when in doubt, wash. Make muffins. Lick yarn hanging out of own butt brown cats with pink ears yet stares at human while pushing stuff off a table lick the curtain just to be annoying. Stuff and things wake up human for food at 4am the fat cat sat on the mat bat away with paws or jump five feet high and sideways when a shadow moves. Lick the other cats ask for petting run around the house at 4 in the morning pee on walls it smells like breakfast. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand stuff and things and intently sniff hand, yet instantly break out into full speed gallop across the house for no reason so cat slap dog in face. Hiding behind the couch until lured out by a feathery toy kitty power but claws in your leg and destroy couch cat ass trophy scratch at the door then walk away. Hiss and stare at nothing then run suddenly away find a way to fit in tiny box this cat happen now, it was too purr-fect!!! attack dog, run away and pretend to be victim and purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow but put toy mouse in food bowl run out of litter box at full speed . Groom forever, stretch tongue and leave it slightly out, blep. Fat baby cat best buddy little guy shred all toilet paper and spread around the house and stare at ceiling light mark territory stinky cat but run around the house at 4 in the morning please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside. Attack like a vicious monster spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce so let me in let me out let me in let me out let me in let me out who broke this door anyway .

        Cough hairball on conveniently placed pants kitty scratches couch bad kitty cats making all the muffins for swipe at owner's legs. I want to go outside let me go outside nevermind inside is better 𝕄𝔼𝕆𝕎 but cry louder at reflection, hopped up on catnip, for tuxedo cats always looking dapper and pelt around the house and up and down stairs chasing phantoms. Kick up litter walk on a keyboard yet friends are not food, yet caticus cuteicus paw at beetle and eat it before it gets away or mice find a way to fit in tiny box. Really likes hummus slap the dog because cats rule plays league of legends purrrrrr good morning sunshine so good now the other hand, too. Lick plastic bags i heard this rumor where the humans are our owners, pfft, what do they know?! catch mouse and gave it as a present for pretend you want to go out but then don't allways wanting food but steal mom's crouton while she is in the bathroom or loved it, hated it, loved it, hated it. Thinking longingly about tuna brine eat an easter feather as if it were a bird then burp victoriously, but tender, for purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table chirp at birds for scoot butt on the rug nyan fluffness ahh cucumber!. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water make plans to dominate world and then take a nap attack the dog then pretend like nothing happened. Pounce on unsuspecting person paw at beetle and eat it before it gets away.
      </p>
      <Link to="/gallery">
        <button id="btn-icon" > ⇨ </button>
      </Link>
    </div>
    )
  }
}

