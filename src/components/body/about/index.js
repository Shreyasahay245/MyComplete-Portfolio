import React from 'react';
import SocialContacts from '../../common/social-contact';
import './about.css';

function About() {
    return  <div className="about">
         <div className='about-top'>
         <div className="about-info">
              Hello Myself 
              <br/> <span className='info-name'>Shreya Sahay</span>
              <br/> I'm an undergraduate of Information Technology at BIT Mesra .
              I love experimenting with the web and an enthusiast competitive programmer.
         </div>
           <div className="about-photo">
               <img src={require('../../../asserts/coding.png').default}
                className='picture'
                />

           </div>
         </div>

        <SocialContacts/>
        </div>
    
}

export default About;
