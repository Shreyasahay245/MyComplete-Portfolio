import React from 'react';
import Separator from '../../common/separator';
import SocialContacts from '../../common/social-contact';
import "./contact.css";

function Contacts() {
    return (
        <div className='contact'>
        <Separator/>
        <label className="section-title">Contacts</label>
        <div className="contact-container">
        <div className="contact-left">
            <p>Want to get in touch contact me on any of the platform</p>
            <SocialContacts/>
        </div>
        <div className="download">
            <a download href={require('../../../asserts/Resume.pdf.pdf').default}>
            <i class="fi-rr-cloud-download  download-icon"/>
             Download Resume
            </a>
            </div>
        </div>
        </div>
    );
}

export default Contacts;
