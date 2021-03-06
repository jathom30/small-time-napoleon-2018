import React from 'react'

import Socials from './Socials'
import Quotes from './Quotes'

import NameLogo from '../assets/NameLogo'
import weddingPhoto from '../assets/photoSection/wedding1.jpg';
import MailChimpForm from './MailChimpForm';

const outdoorPhotoStyle = {
  background: 'url(' + weddingPhoto + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Main = (props) => {

  return (
    <div id="main" className="main">

      <div className="hero-image" style={outdoorPhotoStyle}>
        <div className="darken">
          <NameLogo />
        </div>
      </div>

      <div className="quotes-social">
        <Quotes 
          quote={props.quote} 
          increaseQuote={props.increaseQuote}
          decreaseQuote={props.decreaseQuote}
          handleSwipe={props.handleSwipe} />

        <Socials />
        
        <MailChimpForm />    
      </div>  

    </div>
  )
}

export default Main