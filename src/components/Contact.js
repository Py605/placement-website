import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/contact.css';
import Footer from './Footer';

function Contact() {
  return (
    <div className="outer">
      <section>
        <h1 style={{ textAlign: 'center' }} className="heading">
          Contact Form
        </h1>

        <div className="container">
          <form>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="country">Gmail</label>
            <input
              type="text"
              id="gmail"
              name="gmail"
              placeholder="Your gmail....."
            />

            <label for="subject">Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: '150px' }}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>

          <div className="social">
            <a href="https://www.facebook.com/Doongroupofinstitution/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/DoonInstitute">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/doon_group_of_institution/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
