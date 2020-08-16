const data = [
  {
    portrait: "Akir with Roses for Pink Bandanazz",
    location: "Brooklyn",
    date: "April, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597540043/Akir_with_roses_for_Pink_Bandanazz_Brooklyn_April_2019_ukcned.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Akir_with_roses_for_Pink_Bandanazz_Brooklyn_April_2019_efe25s.mp4",
    personalNote: "The person in this portrait has, for the first time, been met with pure kindness"
  },
  {
    portrait: "Alfie in the corset",
    location: "Brooklyn",
    date: "March, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597542856/xime/Alfie_in_the_corset_Brooklyn_March_2019_r0ejss.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596030/xime/audio/Alfie_in_the_corset_Brooklyn_March_2019_cfwnwl.m4a",
    personalNote: "Una persona intuitiva sintiendo que tiene una comprensiÃ³n profunda de los demÃ¡s y un sentido natural de lo que sucede detrÃ¡s de la escena. Sus nervios y su indecisiÃ³n van y vienen a medida que temen por lo que les depara el futuro, pero su familia les guÃ­a con iluminaciÃ³n y fe."
  },
  {
    portrait: "Andi after the Protest",
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597542867/xime/Andi_after_the_protest_Brooklyn_November_2019_qeppaw.png",
    audioUrl: "",
    personalNote: "I was working a full-time job I hated, tired as always, but found the energy to make a crappy sign & hit the streets with some coworkers to protest the NYPD. of course I run into my friends at the protest, and because we always do the most, we took the subwayâ€”after working all day, after marching--to go support Cristo at their art show in the city. iâ€™m pretty sure it was a weekday! "
  },
  {
    portrait: "Andi on the couch",
    location: "Punta Negra",
    date: "March, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597542879/xime/Andi_on_the_couch___Punta_Negra_March_2020_w8gefy.png",
    audioUrl: "",
    personalNote: "Here I am months later, right after quitting that shitty non-profit job, chilling at an airbnb in Punta Negra, Peru. this was in early March, as corona began to spread and countries began to close their borders. this girl definitely had no idea what was to come. "
  },
  {
    portrait: "Cristobal as Buffy on Halloween",
    location: null,
    date: "October, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543804/xime/Cristobal_as_Buffy_on_Halloween_October_2019_nmk6po.png", // needs to be updated to transparent background
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596030/xime/audio/Cristobal_as_Buffy_on_Halloween_October_2019_n5qcrz.m4a",
    personalNote: `Thereâ€™s a lot of possibility
    And a lot of leg, I might add *wink*
    In this person's field of vision
    A memory of a precipice somewhere
    perhaps some dust inside the boots
    or under that raggedy wig
    from falling and rolling around in the dirt for a while
    But thereâ€™s a playfulness too,
    once abandoned.
    I think I see someone here 
    who is actively choosing
    to invest in themselves
    And they will be grateful for that 
    a few months down the line.`
  },
  {
    portrait: "Djino fire escape lip gloss",
    location: null,
    date: "December, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543813/xime/Djino__fire_escape__lip_gloss__December_2019_tgi0nm.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596030/xime/audio/Djino__fire_escape__lip_gloss__December_2019_zbhgzg.m4a",
    personalNote: "hi to whoever's listening, this is Dj InO reporting live from New Jersey, Elizabeth, I'm a New Jersey, New York based artist. I'm a DJ, poet, writer, whoever you wanna call it. This piece is called GROWTH, I hope you enjoy it...This age is adulthood, don't get it misunderstood, this age is adulthood, dont get it misunderstood...To really know who we are, Pespective state of mind. To really know who we are, subjective state of mind. I've been a little distant, emotionally, literally, I'm just trying to groove all the way to my tomb, rebirth the slick spirits that's been getting me all alone.I'm never alone. My ancestors are my roof, they're my dome. This age is adulthood, don't get it misunderstood, this age is adulthood, don't get it misunderstood. I talk to myself, it's called a reflection. Each reflection is a deflection or a rejection of a reality that is a subjection of society. Meaning is within, is calling out, then without is calling in. This age is adulthood, don't get it misunderstood. Each age is adulthood, don't get it misunderstood. Each age is adulthood, don't get it misunderstood."
  },
  {
    portrait: "Domingo's new home",
    location: null,
    date: "January, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543820/xime/Domingo_s_new_home_January_2020_zxgqtk.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596030/xime/audio/Domingo_s_new_home_January_2020_cdjnb2.m4a",
    personalNote: "Sorry i feel like such a failure to you right now, it's been really crazy. That picture is so insane, it's literally a reminder of a different existence and a different time, because I...that doesn't exist to me anymore. The future that...the future back then is like evaporated, like that doesn't exist anymore. I'm currrently in such an insane level of presence that there is no future, because all you have to do is be present and live in the future you want to exist, this is kind of what I'm trying to do now. And it's really intense. I'm like very overwhelmed by my family, they've been triggering me a lot recently. I've just kind of reached this plane of very little patience with them. A friend of mine died recently that, was very unexpected. It wasn't Covid. But he, basically like, he...probably overdosed, but it was also suicide...it was like a purposeful overdose, and that's really hard right now, he was also an artist in town. Yeah, I don't know, that picture is really crazy to me right now. You know, cause it's...I don't know, it's hard to say much. It's tough that I've been feeling a lot, these whole past few months. And I don't know what to, I don't know. I love you, I hope you're feeling better. Thank you for checking up on me and following up, I'm really sorry. I'm here right now if you wanna talk. Maybe we can figure something out...I don't know. "
  },
  {
    portrait: "Edua after their performance",
    location: null,
    date: "March 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543828/xime/Edua_after_their_performance_March_2019_kgqnw6.png",
    audioUrl: null,
    personalNote: `eduaaaaa
    Esta es una edua DECIDIDA.
    
    A esta edua se le desplomÃ³ el suelo 
    y  esa caÃ­da libre la arrojÃ³ al momento preciso que esta imagen captura.
    Con tierra en el cuerpo.
    Momentos despuÃ©s de entregar las uÃ±as a un hallazgo performance,
    y dos dÃ­as antes de trasladar su vida de nuyork a la montaÃ±a, circasia.
    
    Esa casi-sonrisa
    esconde entre las muelas miedos, incertidumbres, morriÃ±a, y felicidad.  
    pero...
    es una edua decidida, dando pasos a ciegas pero firmes.
    
    Tras la cÃ¡mara estÃ¡ su familia, 
    y la nostalgia.
    Personas que se entre-acogieron para cuidarse y cultivarse.
    Y truly, crecieron juntas.
    Personas que ahora, en la mÃ¡s bÃ¡sica analogÃ­a, se permiten echar vuelo.
    y se abrazan fuerte en gratitud.
    
    En este retrato figura la despedida y las Ãºltimas visiones de un CAPITULAZO fundamental en la historia de edua. De lo que viene solo figura su opacidad.`
  },
  {
    portrait: "Fudge at her shoot",
    location: "Brooklyn",
    date: "April, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543982/xime/Fudge_at_her_shoot_Brooklyn_April_2019_dfyivg.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596030/xime/audio/Fudge_at_her_shoot_Brooklyn_April_2019_alz3lo.mp4",
    personalNote: `She is so fearless, so strong and so GODDAM TIRED ! 

    She was killing the game creating her own statement clothing line that empowers many, but overtime she found herself thinking ""Are people gonna like it? 3 years doing fashion shows, but never feeling satisfied. Like ""Why tf am I doing this ?""
    
     With no real goal in sight beyond saying what tf needed to be said.... she stayed focus on the bts of it all knowing her Soul wanted center of attention. 
    
    She realized she didnt wanna be known for fashion, and nowhere in the mainstream where people pretend to be who they are and dont get royalties for their shit. There is no Black excellence if the dollar dont look like me.
    
    Confused and subconsciously lonely, she decided to let go of everything she knew. Knowing that she knew nothing. There was something greater for her soul to emerge into. 
    
    She lost her mind just to find me there, sitting carelessly like the fool on that tarot card, ready for a new adventure. 
    `
  },
  {
    portrait: "Iyabo on the night of her performance",
    location: "Brooklyn",
    date: "September, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543988/xime/Iyabo_on_the_night_of_her_performance_Brooklyn_September_2019_xm5ccw.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Iyabo_on_the_night_of_her_performance_Brooklyn_September_2019_i3b84f.m4a",
    personalNote: "In this photo, that person is surrounded by their dreams, metaphysically and physically. It's the first time that they had a show where people came out to support, to celebrate their music. And in the past, when dreams had been something they were reaaching towards, something that only occurred when they fell asleep, this was a time where the metaphysical met the physical. That moment when those dreams you were creating in your head at night, in sleep, in other worlds, other galaxies, other universes, those dreams aligned with reality and became reality. In this photo that person is joyful, hopeful, happy, excited, in love with the world that they had created through their music and anxious as they wanna make sure that they will always continue to fuse reality with other galaxies, other worlds, to fuse the way that they're living with their dreams, with their reality, to make those dreams tangible not some far away world in some far away existence."
  },
  {
    portrait: "Jess and Lolu in the morning",
    location: "Brooklyn",
    date: "September, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543993/xime/Jessica___Lolu_in_the_morning_Brooklyn_November_2019_cpinca.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Jess___Lolu_in_the_morning_Brooklyn_November_2019_cxcqsq.m4a",
    personalNote: "She is open, untangling, un-learning and re-learning. Her eyes are bright and wide as she gently dabs mamey toned rouge on her cheeks. She feels safe here, in this room, in this place. With these wonderful people her anxieties fears and traumas are given a place to sit at the table. They donâ€™t have to hide under the bed anymore. She sometimes longs to simultaneously be present and invisible. She watches Loluâ€™s tender glance dance in the mirror and feels grounded and in love with Lolu, Xime and the sacred space that the three of us created this morning."
  },
  {
    portrait: "Jess and Ocean on my purple sheets",
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597543991/xime/Jess_and_Ocean_on_my_purple_sheets_Brooklyn_November_2019_nz0ywl.png",
    audioUrl: null,
    personalNote: null
  },
  {
    portrait: "Julio in my hoops",
    location: "Lima",
    date: "May, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544583/xime/Julio_in_my_hoops_Lima_May_2020_urzhcv.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Julio_in_my_hoops_Lima_May_2020_ooiucy.mp4",
    personalNote: "Jijiji, no voy a olvidar ese dÃ­a, porque despuÃ©s de tantos dÃ­as de estar encerrado, ese dÃ­a fue la reconexiÃ³n total con lo que mas amo de esta parte de haberme redescubierto, como lo llamo. De aceptar mi feminidad. Ese dÃ­a pude como que darle rienda sueltaâ€¦tenÃ­amos tanta ropa, maquillaje, y mucho mucho apoyo y mucho mucho amor. Fue increÃ­ble. DespuÃ©s de mucho tiempo me sentÃ­ parte de algo, de un movimiento, de un corazÃ³n, de un grupo de personas. Me sentÃ­ entendido. Eso es invaluable. Invaluable. "
  },
  {
    portrait: "Karen y periodico",
    location: "Lima",
    date: "June, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544586/xime/Karen_y_periodico_Lima_June_2019_os5e95.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Karen_y_periodico_Lima_June_2019_geju0a.m4a",
    personalNote: "Â¿Estas son las ultimas fotos de ese rollo cierto? Hemos abierto maletas, las hemos cerrado y tambiÃ©n las dejamos. Estas cansada, Â¿para que leer un periÃ³dico de ayer?  Porque el mes pasado sigue siendo relevante, para mÃ­. Alma de papel. "
  },
  {
    portrait: "Keioui & the Sea",
    location: "Grove Fire Island", 
    date: "May, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544590/xime/Keioui___the_sea_at_Cherry_Grove_Fire_Island_May_2019_eqtck3.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Keioui___the_sea_at_Cherry_Grove_Fire_Island_May_2019_vwlzps.m4a",
    personalNote: "I felt you next to me, i next to we, we next to us. Up close and personal. Kissed and caressed the outer walls of our balance and servitude. Pushed through, gracing the surface of replenishment. Fucked, licked and humped the pain away. Held the weight of a thousand souls no longer with us, held a thousand more souls coming into to being. What does it mean to hold each other up, to moved together in the silence of communication? I felt you shiver, us quack and acclimate. Found shelter in our finger tips and puddles of run off that held our collective steps, skins cells and molecules together. Gathered with the histories, herstories, theirstories of movement and migration. We stood together hands up to the sky in love and light. "
  },
  {
    portrait: "Keioui Peanut Stew",
    location: "Brooklyn",
    date: "November, 2018",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544592/xime/Keioui_s_Peanut_Stew_Brooklyn_November_2018_jn2cqr.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Keioui_s_Peanut_Stew_Brooklyn_November_2018_edymx6.m4a",
    personalNote: "We elbows down on the tables, stone. Found warmth in the palms of our hands, the sight of action. Collective witnesses to the power, softness and wetness and resilience and beauty. You saw beauty in me, I saw beauty in we and we together stand in light, love. Next to bodies of water.Forever transformed and spreading. Love. "
  },
  {
    portrait: "Maria al lado de su casa de nina",
    location: "El Carmen",
    date: "February, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544674/xime/Maria_al_lado_de_su_casa_de_nin%CC%83a_El_Carmen_February_2020_ta8ggj.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Maria_al_lado_de_su_casa_de_ni%C3%B1a_El_Carmen_February_2020_n110tm.mp4",
    personalNote: "Esa foto es una foto hermosa, muy espontanea. Me encanta porque ahi me veo un poco este...avergonzada, pero a la vez feliz. Creo que era el momento. Refleja mi verguenza ante una camara, porque no me gusta mucho este...que me tomen foto. Entonces esa foto es linda, me encanta. Linda."
  },
  {
    portrait: "Midrene with roses",
    location: "Brooklyn",
    date: "December, 2017",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544965/xime/Midrene_with_roses_Brooklyn_December_2017_gncgjf.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Midrene_with_roses_Brooklyn_December_2017_spl4kk.m4a",
    personalNote: "The person in this portrait is off her game and has been caught slipping. The dressing room door where her vulnerability and femininity hides, is cracked open. A stolen glance of her wide hips, soft expression, and un-lotioned hands. She is caught off guard as she is getting ready to walk out and close that door shut behind her. As she prepares to take her post of guarding the entrance with timberlands, baseball caps, and Big Spoon only energy. All those who desire access are not on the list. She is unaware that the post is vacant and her door locks have been picked."
  },
  {
    portrait: "Midrene the night we all wore berets to the bar",
    location: "Brooklyn",
    date: "February, 2018",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544676/xime/Midrene_the_night_we_all_wore_berets_to_the_bar_Brooklyn_February_2018_lpx6fa.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Midrene_the_night_we_all_wore_berets_to_the_bar_Brooklyn_February_2018_rl2uvd.m4a",
    personalNote: "Wwwwwwoooooowwwww.... This photo looks like decades ago! Who is this?! Still I smile. When I look at the person in this portrait, I see a girl who wants a girlfriend so bad. My fashion choices are entirely motivated by my desire to be desired. â€œSee how Gay I am? Peep the pose. Peep the rainbow bracelet. See how cool I am? Iâ€™m here with a group of some of the coolest people in Brooklyn. We got matching berets. Oh sure.. Iâ€™m into Zodiac stuff. Look at my necklace. Iâ€™m a Taurus. My rising?? Uhhh....â€ The person in this portrait is trying so hard to look and act like what she assumes it is to be a Gay Black Woman. Today, I no longer wear the Taurus necklace. The big face wrist watch is broken and gone. Beret returned. Rainbow bracelet covered with dust on the dresser. The person in this portrait didnâ€™t know yet that her performance wasnâ€™t necessary."
  },
  {
    portrait: "Naila Mami on the roof",
    location: null,
    date: "March, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545067/xime/Naila_Mami_on_the_roof_March_2019_k7hl2w.png",
    audioUrl: null,
    personalNote: `Perplex
    A light
    A soul
    A gift wrapped too tight with an essay as a label
    A prayer in a dialect you can never get used to 
    A hand to hold
    My ancestorsâ€™ wildest dream
    That bitch thatâ€™s gonna tell you about yourself
    with a tongue pop, a neck roll, eye roll and will
    occasionally scream period or yaaaaaaaas at the
    end of a sentence
    A force to be reckoned with
    Not taking no for an answer
    A voice that cannot be silenced
    Named by allah, caressed by nuestra seÃ±ora
    de Guadalupe, protected by spirit
    A black body
    A queer body
    A body`
  },
  {
    portrait: "Nancy before libre",
    location: null,
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545068/xime/Nancy_before_Libre_November_2019_famjam.png",
    audioUrl: null,
    personalNote: `This person was living out her middle school fantasies.
    I remember getting ready for Libre, I had borrowed the berets from Xime, and wore Viancaâ€™s makeup channeling both of their fearless energies. You couldnâ€™t tell me shit that night.
    
    The windows in the venue were foggy due to all the heat produced from the dancing bodies. We left the party early that night and got candies to eat in the car ride home.`
  },
  {
    portrait: "Nancy cigarette",
    location: "Cherry Clove",
    date: "May, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545075/xime/Nancy__cigarette_Cherry_Grove_May_2019_qss5qy.png",
    audioUrl: null,
    personalNote: `This person is la Nancy Johanna Villalobos.
    She feels the most confident at the beach naked and jiggly. She feels the most beautiful sun kissed and brown. She feels the most safe when she can laugh and cry.
    We ended our day watching the sunset on a dock eating sandy sandwiches and reminiscing.
    
    I never feel shy in from the of the camera when the person taking the picture loves me. Itâ€™s like they see me for who I am, una mujer en toda su gloria.`
  },
  {
    portrait: "Nani at the Lotus Club Reunion",
    location: "DC",
    date: "December, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545081/xime/Nani_at_the_Lotus_Club_Reunion_DC_December_2019_mhlihe.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Nani_at_the_Lotus_Club_Reunion_DC_December_2019_gr7wjl.m4a",
    personalNote: `I had this dream once that I had met I guess what I would consider a better version of myself, in this sort of alternate universe...I guess, you know, on the other side of things. And I remember that I was laying on a leaf, when this being emerged from my stomach...she was, she was blue but mostly green. She was green and inside of her it looked like there were like blue like surging, veins or like electricity. She was the most beautiful person, I had ever seen, or thought...in this dream. And she didn't say any words to me, she just stood up sort of standing on top of me, but I could hear her talking to me, I guess it was telepathically, you know? And then I remember that she put her hand on my chest, on top of my heart and she sent this like...it was like lightning. It was like a surge of electricity that she sent through me, and she said, this is this is where you will begin to heal. And that was the end of the dream, I never have remembered anything like that in my life, I've never remembered a dream like that, I've never...I remember it so fresh. And, I woke up and I was really upset, I was so upset, I was crying and I was so sad, because I felt like I'd never see her again. I kept saying "oh my god, will I ever see her again?"...But I think I see her here.`
  },
  {
    portrait: "Nitty in Burgundy",
    location: "DC",
    date: "December, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545466/xime/Nitty_in_Burgundy_DC_December_2019_x3ugcd.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Nitty_in_Burgundy_DC_December_2019_k3iw24.m4a",
    personalNote: "The woman in this photo is half discovered, half mysterious. Softened by any blows but still as gracious and groovy as her grandmothers' grandmothers' grandmothers before her."
  },
  {
    portrait: "Lolu smoke break",
    location: "Brooklyn",
    date: "December, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597544671/xime/Lolu_smoke_break_Brooklyn_December_2019_szmlz2.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596043/xime/audio/Lolu_smoke_break_Brooklyn_December_2019_cr02pa.m4a",
    personalNote: `it slips out my ssss mouth so slippery
    the thing the deed the riddle the conundrum
    riddle me this
    if I own my time, am I my own(her) or am i a theif
    riddle me this riddle me this riddle me this
    me and my sisTAR me and my sisTAR  me and my sisTAR
    xime, xime
    we decided, we took action, we planted,
    we will sew and we will see
    either way, weâ€™ll be well fed, so on rooftops
    we proclaimed that these were our lives and we Were going to do the damn thing and that we were going 
    to heist our way into the divinity of our mission 
    aaamiiooo asÃªooo`
  },
  {
    portrait: "Omololu's first time at Riis",
    location: null,
    date: "July, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545467/xime/Omololu_s_first_time_at_Riis_July_2019_kjrnww.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Omololu_s_first_time_at_Riis_July_2019_oyftka.m4a",
    personalNote: `"oooo she be fire
    oooo she be sunkissed
    daughtering the sun, teaching heat her moves
    glisten glisten glide, pour into the divine
    Moonlight mes, Moonlight mes, Moonlight mes
    arise
    OOF this heat is needed
    OOF this heat is needed"`
  },
  {
    portrait: "Oscar red nails",
    location: "Brooklyn",
    date: "March, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545466/xime/Oscar_red_nails_Brooklyn_March_2019_ewewra.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Oscar_red_nails_Brooklyn_March_2019_tikn9p.mp4",
    personalNote: `Faggot
    Maricon
    Trans Femme
    Non Binary
    Genero Disidente
    
    A esta persona le gusta tener las uÃ±as largas y rojas como garras filosas.
    
    Con su pelo largo, unos hoops, y un labial rojo de resistencia debajo de su bigote.
    
    Lleva una rosa emergiendo en el pecho; floreciendo a pesar de su jaula.
    
    Elle (they/them) o a veces Ella (she/her) se aterriza en pensar que el mundo va furiosamente en espiral.
    
    Entre galaxias y universos, nosotres solo somos microorganismos, bacteria, cÃ©lulas corporales.
    
    Y por suerte seguimos en gravedad, en esta espiral, con las energÃ­as que mas nos atraen y nos alimentan.
    
    Y aun siendo particulas, granos en el espacio, somos cargadas con potencial atÃ³mica. 
    
    Que nuestra presencia derrumbe y devasta
    Que nuestras ofrendas cultiven y reconstruian.
    
    Y que alcanzemos, desde nuestras imaginaciones y en lo material, a un mas allÃ¡ de nuestro presente.`
  },
  {
    portrait: "Pao at the Tropicuir Fundraiser",
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545468/xime/Pao_at_the_Tropicuir_Fundraiser_Brooklyn_November_2019_olwntx.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Pao_at_the_Tropicuir_Fundraiser_Brooklyn_November_2019_bypuoz.m4a",
    personalNote: "Pao (they, them/elle, ellis): A Diasporadical BoriTrans tropi cuir food maker and grower who uses art as a tool for organizing and remembering inter-generational knowledge. I am on, have familial ties, and grow foods on Lenapehoking territory of the Lenape Delaware people. I grow food with shared seeds from across Arawak, Tainx, and Palestinian lands as act of liberation and to continue legacies. I'm inspired by the cultivation of language justice and I take a moment to acknowledge the many forms of language and communication that honor and preserve our cultures. Conversations are an act of radical connection that combat the legacies of violence and displacement that have separated us but also bring us together. Itâ€™s ongoing validation of our true stories that dismantle the settlements that oppress us. And with food, we communicate to link traditions, rituals and share meanings with others."
  },
  {
    portrait: "Pedro con abanico despues de bailar",
    location: "Callao",
    date: "February, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545985/xime/Pedro_con_abanico_despues_de_bailar_Callao_Febrero_2020_dodzxb.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Pedro_con_abanico_despues_de_bailar_Callao_Febrero_2020_keetv9.ogg",
    personalNote: `Vengo de muy lejos
    y estoy aqui mucho tiempo
    Â¿Crees que pertenezco aqui?
    Â¿Te pertenezco?
    Al fin y al cabo no me tienes, nunca me tendrÃ¡s.
    Mi voz, mi llanto, mi sufrimiento, son mios.
    Mi alegrÃ­a, mi placer, mi sensualidad, son mios.
    No soy quien crees
    No creas quien soy
    Soy muchas personas
    Todas soy yo
    Pero que tanto puede significar para mi?
    Para alguien mÃ¡s.
    Nacido en sÃ¡bado de gloria.`
  },
  {
    portrait: "Prince en Cuarentena",
    location: "Lima",
    date: "April, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545986/xime/Prince_en_cuarentena_Lima_Abril_2020_qumyha.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Prince_en_cuarentena_Lima_Abril_2020_lb262g.mp4",
    personalNote: "Hey Prince, Â¿te acuerdas cuantos aÃ±os pasamos sin sonreÃ­r? o sea tÃº sabes, sonreir de verdad. Sentirnos vivas. Â¿Te acuerdas? Fueron muchos. AsÃ­ que no te olvides de lo enamoradas de la vida que estamos cada vez que sonreÃ­mos, no te olvides de mÃ­, no te olvides de ti y sobre todo nunca te olvides de nosotras. Te amo. De mi para ti, de ti para mi y de mi para mi."
  },
  {
    portrait: "Prince reaching Lima",
    location: "Lima",
    date: "April, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545986/xime/Prince_reaching_Lima_Abril_2020_g8m9gw.png",
    audioUrl: null,
    personalNote: null
  },
  {
    portrait: "Sandra at the window",
    location: "Lima",
    date: "March, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597545985/xime/Sandra_at_the_window_Lima_Marzo_2020_zihuxt.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Sandra_at_the_window_Lima_Marzo_2020_tt7goa.m4a",
    personalNote: "Hoy pensÃ© en ti, en mÃ­, en nosotras. Eres hermosa. Te beso y miro todos los dÃ­as pa recordarte que estoy contigo, que estoy conmigo, yendo bien apachurradas y calientitas, haciendonos compaÃ±Ã­a en Ã©ste mundo â¤ te amo San "
  },
  {
    portrait: "Sandra en naranja",
    location: "Lima",
    date: "March, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546180/xime/Sandra_en_naranja_Lima_Marzo_2020_ekzxdh.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596044/xime/audio/Sandra_en_naranja_Lima_Marzo_2020_jvtxv9.m4a",
    personalNote: "D.U: Llena mi alma, mente y corazÃ³n de amor... Hermosa mariposa que no sabe mÃ¡s que volar sin volver atrÃ¡s Bellas alas tan livianas como sus palabras Vive y muere con cada latido, hasta el borde del llanto, hasta el desborde del amor y dolor.Oh, diosa mariposa Deja que las aguas te muestren el camino y toma impulso para brillar con el sol" // note: will need to figure out how to ident lines within a string
  }, 
  {
    portrait: "Seraah between the Matriarchs",
    location: "Boston",
    date: "November, 2010",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546180/xime/Seraah_between_the_matriarchs_Boston_November_2010_j7ogjd.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Seraah_between_the_matriarchs_Boston_November_2010_slvqmh.wav",
    personalNote: "There I am between the pillars of my foundation, a once lost boy sitting calmly at the piano expressing my search and attainment of manhood through the force of syntax, voice, and creative ingenuity. My whole life I've turned the detritus of life into gold; divine masculine. I used to think, â€œmy childhood was rotten, you wouldnâ€™t want to be me, you wouldnâ€™t want my lifeâ€ until I realized the function of trials and tribulations, I realized the value of falling flat on your face only to get up and move on another 10 years, then another 10 more, and then some more until I merged with music, performing the reforming of my ROYGBIV refractions into one ominous beam of light. The pain of not having a father, of not understanding why I always felt out of place, of feeling so divorced from my sense of self ceased to exist when I realized that everything I needed to express nature had already been given to me. The Matriarch is my foundation, and from there I've built my legacy through art and deed. I express evolution because  Nature Allows Evolution."
  },
  {
    portrait: "Sofia en el techo",
    location: "Brooklyn",
    date: "June, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546180/xime/Sofia_en_el_techo_Brooklyn_June_2019_hv5pt5.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Sofia_en_el_techo_Brooklyn_June_2019_bsu7hm.mp4",
    personalNote: `I remember for a moment I wanted to move to NY. Thatâ€™s the moment Ximena took that photo, itâ€™s been a year to be exact, and so many things have changed our lives, many lives have changed forever. I could not imagine the things that were gonna happen, all I knew is that i needed to return back home and be back in my bed. I needed to be back with my friends in Mexico City, thatâ€™s where I live now. 

    Yo creo que la vida cambio demasiado, que te dirÃ­a a ti sociaâ€¦lo primero que te dirÃ­a es que no dejes de hacer el trabajo que estas haciendo, no dejes de tejer alianzas, las cuales me estÃ¡n ayudando a mi a crecer como persona y como mujer pero tambiÃ©n estoy aprendiendo a conocer otras vidas y a otras hermanas a travÃ©s del trabajo que se esta haciendo. Nunca pensÃ© que el trabajo que estoy haciendo fuera a ser reconocido, pero ya en este momento, ya ni me interesa. Me interesa mas ser reconocida por mi comunidad, mis hermanas, y aquellos los cuales he escogido que sean parte de mi vida como tu Ximena. Gracias gracias por darme alojo las veces que he llegado a Nueva York, gracias por darme alojo en tu casa, gracias por las platicas que hemos tenido en tu cocina. 
    
    Lo Ãºnico que te puedo decir Sofia es que la vida va a cambiar mucho, y una tiene que ser fuerte.  
    
    I want to recognize the efforts of so many people now, and then to make a better trans future, not only for ourselves but for others. Even under these circumstances, our community, my trans community will make space and time to thrive because we deserve a better future for us, as elder women for our younger generation, seeking hope in such a time of uncertainty or I just cannot imagine living a life without any physical contact as a young adult.
    
    I want to tell myself that things are going to be better, and that I shouldnâ€™t give up and I should continue doing the work that I do. Iâ€™m playing a little bit of rancheras cause thatâ€™s how I feel, itâ€™s a day after a new moon. 
    
    I wanna encourage more people to remind yourselves that life has some strange surprises and that we should just continue to live our lives and those with privilege to give us a little bit of access and recognize that we exist and that we are trying hard to be afloat and survive in such a chaotic time. 
    
    Gracias Ximena, for taking this photo and reminding me that in a year so many things can change, and Iâ€™m actually beyond excited for the future. For my future. For the trans future. For our queer future that we are building together, thank you, I hope to see you soon and hug you again.`
  },
  {
    portrait: "Sonny at his temporary home",
    location: "Brooklyn",
    date: "January, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546180/xime/Sonny_at_his_temporary_home_Brooklyn_January_2019_jz2v3b.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Sonny_at_his_temporary_home_Brooklyn_January_2019_r9rywj.m4a",
    personalNote: `I would describe the person in the photo
    as me. A vulnerable respect to the mutual expression
    of selfhood, light, and relief. A stoner boner, careless, free, and giving.`
  },
  {
    portrait: "Stefa after the protest before the art gala",
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546567/xime/Stefa_after_the_protest__before_the_art_gala_Brooklyn_November_2019_mnfisg.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Stefa_after_the_protest__before_the_art_gala_Brooklyn_November_2019_gbc8ts.mp4",
    personalNote: "This person is coming back from a protest where they met up with their friends, to yell, to rage and to come together, in love and in community. This person, dressed for the occasion...they're on their way to support their loves in their triumphs. This person can't get over New York city. This person loves their fucking city. Sometimes they ask themselves, does my city love me back though? Um, but nights like these, remind them that there is so much abundance in this place and there's so many people who they look up to an admire and strive to be like...and they're lucky to call those people their friends! This person, is dressed like they feel inside, they were feeling fab, they were feeling fierce, they were feeling fun, they were feeling qt, they were really feeling themselves that night. This person is constantly changing, I'm looking at this person and I already feel different from them. This person...yeah."
  },
  {
    portrait: "Vianca as Rue",
    location: "Brooklyn",
    date: "October, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546567/xime/Vianca_as_Ru_Brooklyn_October_2019_a0xjzy.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Vianca_as_Rue_Brooklyn_October_2019_bdhiq8.m4a",
    personalNote: `Halloween 2019. I dressed as Rue from Euphoria. In the first season of the show, they never explicitly name Rue’s gender or sexuality. Queer characters are allowed complexity in that their queerness is not the driving force behind their character arc, though it is acknowledged and certainly part of the plot. Rue falls in love with Jules and they’re queer but it’s not a “coming out story.” I think Rue’s gender is referenced once when Jules dresses them and says, “I like the way I dressed you but I’m worried I fucked with your gender expression.” That moment reminded me of the intentional decision I made to look for looser-fitting clothing years ago, before I felt comfortable asking anyone to use they/them pronouns when referring to me. I see my own gender and sexuality reflected in Rue. I see myself before I had the words “queer” or “non-binary” or “fluid” as descriptors and I like to imagine what it’d be like not to feel the need to define or disclose those identities; to live in a world where queerness doesn’t require explanation. `
  },
  {
    portrait: "Vianca overlooking the city",
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546567/xime/Vianca_overlooking_the_city_Brooklyn_July_2019_btiw4x.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Vianca_overlooking_the_city_Brooklyn_July_2019_paipeo.m4a",
    personalNote: `A few days before this photo was taken, my then soon-to-be ex took a photo of me at the beach. He took the photo from below so my ass was the focal point and said “I want you to see you how I see you.” He laughed and so did I, in an effort to hide my discomfort (a habit I’m working to break.) I don’t know if he understood or would understand objectification in romantic relationships to be harmful. I don’t know that he would see the link between persistent objectification and the belief that value is primarily based on physical appearance, or the negative effect that has on a person’s sense of self/worth, but I heard these words as final confirmation that he was incapable of affirming me in other ways just as regularly.



    Here I am, on the rooftop of my friend’s apartment overlooking the place I was born, in the fog of a recent break up, somewhere between grief and relief, feeling seen as I see myself for the first time in a long time. Thank God for friends who see you and show you who you are; friends who reflect you back to yourself.`
  },
  {
    portrait: "Wendarlene at the family photoshoot", 
    location: "Brooklyn",
    date: "November, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546567/xime/Wendarlene_at_the_family_photoshoot_Brooklyn_November_2019_cuotyz.png",
    audioUrl: "https://res.cloudinary.com/canelaconpan/video/upload/v1597596045/xime/audio/Wendarlene_at_the_family_photoshoot_Brooklyn_November_2019_x7y5ht.m4a",
    personalNote: `The woman in this photo… 
    was overwhelmed with grief and joy.
    was processing her mother’s passing 5 days prior.
    was there to celebrate her daughters 30th birthday.
    was celebrating motherhood/womanhood/legacy.
    was healing.
     
  The woman in this photo…
    felt blessed.
    felt in awe of her daughters.
    felt the love around her.
           felt conflicted.
           felt awkward.
    felt the healing.
    
  The woman in this photo…
    is not alone.
    is resilient.
    is resourceful.
           is sensitive.
           is raw.
           is healing.
  
  The woman in this photo is ME!
          November 9, 2019
          Brooklyn, NY
  `
  },
  {
    portrait: "Zion in blue",
    location: "Harlem",
    date: "January, 2020",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546568/xime/Zion_in_Blue_Harlem_January_2020_ykhp9o.png",
    audioUrl: null,
    personalNote: "I would describe the person in this portrait as someone who has strong boundaries. She’s loving but can come off as distant and detached. She carries so much in her heart but she doesn’t always know how to show it or translate what she’s feeling into words. She’s kind and sweet and craves affection. She likes and wants (good) attention, but doesn’t always have the energy to enjoy it. She’s a lover who feels like her love might weight too much. She’s practicing trust. She’s learning how to smile more. She’s feeling cute. She’s feeling happier than she normally does. "
  },
  {
    portrait: "Zion in Chinatown",
    location: "Mahanttan",
    date: "December, 2019",
    imgUrl: "https://res.cloudinary.com/canelaconpan/image/upload/v1597546568/xime/Zion_in_Blue_Harlem_January_2020_ykhp9o.png",
    audioUrl: "",
    personalNote: "I would describe this person as a girl who’s traveling outside of her comfort zone. It’s her first time with a full face of makeup. She’s feeling a little insecure bc she didn’t like how her hair looked that day. She had some trouble getting to event she was invited to at first. But she got where she needed to go with a little help from her angels, and she felt better after arriving. She feels confident in the outfit she’s wearing. She was feeling pretty dysphoric that day, but she’s okay. "
  }
];



export default data;