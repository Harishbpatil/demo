import React from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {FaWhatsappSquare} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v68ydcm', 'template_zxvuwqv', form.current, 'CYPsshzxDffbHp7tJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
        
      <div className=" contact" id="contact">
      <Fade left>

      
      <h2 className="col-12 mt-3 mb-4 text-center ">CONNECT WITH ME</h2>
      <hr />
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Fade right>

                 
                    <img
                      src="https://thumbs.dreamstime.com/b/contact-me-sticky-note-laptop-closeup-message-53436480.jpg"
                      alt="ocontact"
                      className="image"
                    />
                   </Fade>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              
                <div className="card2 border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        

                        <a className="btn btn-linkedin" href="https://www.linkedin.com/in/harishbpatil/"
                        rel="noreferrer"
                       target='_blank'
                      >
                     <BsLinkedin color="#0A66C2" size={24} className="ms-2"/>
                     </a>



                        
                        <a className="btn btn-facebook" href="https://github.com/"
                        rel="noreferrer"
                       target='_blank'
                      >
                     <BsGithub color="#6e5494" size={24} className="ms-2"/>
                     </a>

                     <a className="btn btn-whatsapp" href="https:api.whatsapp.com/send?phone=8296834740"
            rel="noreferrer"
            target='_blank'
            >
              <FaWhatsappSquare color="#59CE72" size={24} className="ms-2"/>
              </a>

                        
                        <a className="btn btn-facebook" href="https://www.facebook.com/"
                        rel="noreferrer"
                       target='_blank'
                      >
                     <BsFacebook color="#1877F2" size={24} className="ms-2"/>
                     </a>


                        

                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </>
  )
}

export default Contact