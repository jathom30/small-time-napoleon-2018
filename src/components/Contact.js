import React, {Component} from 'react'

// import GoogleForm from './GoogleForm'

import backgroundImage from '../assets/photoSection/jeffSings.jpg'

const backgroundStyle = {
  background: 'url(' + backgroundImage + ') #262355',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Contact extends Component {



  render() {
    const {emailSubject, changeEmailSubject, changeEmailDate, emailButtonValue, emailEventTitle, changeEmailEventTitle, changeEmailBody, submitContactForm, } = this.props

    let date = <label>Date:<input onChange={changeEmailDate} type="date" name="date" /></label>
    let eventTitle = <label>Event Title:<input type="text" value={emailEventTitle} onChange={changeEmailEventTitle} name="event" /></label>

    return(
      <div className="contact" id="contact">
        <div className="background" style={backgroundStyle}>
          <div className="darken"></div>
        </div>

        <div className="form">
          <h3>Contact us</h3>

          <form name="contact" method="POST" netlify-honeypot="bot-field" netlify onSubmit={submitContactForm}>
          <p className="hide">
            <label>Don’t fill this out if you're human: <input name="bot-field" type="text" /></label>
          </p>
            <label>Subject:
              <select name="subject" onChange={changeEmailSubject} value={emailSubject}>
                <option value="Booking">Booking</option>
                <option value="General Question">General Questions</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {emailSubject === "Booking" ? date : null}
            {emailSubject === "Booking" ? eventTitle : null}

            <label>Email: <input name="email" type="email" /></label>

            <textarea name="message" placeholder="your message here" onChange={changeEmailBody} />


            <button type="submit" >{emailButtonValue}</button>
          </form>

          <h3>Email</h3>
          <a href="mailto:smalltimenapoleonband@gmail.com?Subject=Hello%20amazing%20band%20I%20love">smalltimenapoleonband@gmail.com</a>
          <h3>Phone</h3>


        </div>
      </div>
    )
  }
}