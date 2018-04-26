import React from 'react'

import Socials from './Socials'
import Quotes from './Quotes'

import NameLogo from '../assets/NameLogo'
import weddingPhoto from '../assets/weddingPhoto.jpg';


const outdoorPhotoStyle = {
  background: 'url(' + weddingPhoto + ') #262355',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Main = (props) => {

  return (
    <div className="main">

      <div className="hero-image" style={outdoorPhotoStyle}>
        <NameLogo />
        <div className="darken"></div>
      </div>

      <Quotes 
        quote={props.quote} 
        increaseQuote={props.increaseQuote}
        decreaseQuote={props.decreaseQuote} />

      <Socials />
      
    </div>
  )
}

export default Main