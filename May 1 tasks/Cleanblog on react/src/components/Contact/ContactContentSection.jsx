import React from 'react'

function ContactContentSection() {
  return (
    <>
     <section className="contact_content">
            <div className="contact_content_items">
              <p className="contents media">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
              <form>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email address"></input>
                <input type="number" placeholder="Number"></input>
                <textarea placeholder="Message"></textarea>
                <div className="send"><button className="button">Send</button></div>
              </form>
            </div>
        </section>
        <hr></hr> 
    </>
  )
}

export default ContactContentSection
