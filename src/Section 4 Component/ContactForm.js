import "./ContactForm.css";
import React from 'react';

function ContactForm() {
  return (
    <form id="form1" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/myyvwwye" method="post">
          <fieldset id="inputs">
            <input type="text" name="name" id="fullName" placeholder="Full Name" required="Your name is required!"/>
            <input type="email" name="_replyto" id="email" placeholder="Email" required="Your email is required!"/>
            <input name="_subject" id="subject" placeholder="Subject"/>
            <textarea rows="5" name="message" id="messages" placeholder="Message" required="Message is required!"></textarea>
          </fieldset>
          <input id="send" type="submit" value="SEND"/>
  </form>
  );
}

export default ContactForm;