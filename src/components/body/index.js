import React from 'react';
import About from './about';
import './body.css';
import Contacts from './contact';
import Projects from './projects';
import Skills from './skills';
import Work from './work';
function Body() {
    return <div className='body'>
           <section id='about'>
               <About/>
           </section>
           <section id='projects'>
               <Projects/>
           </section>
           <section id='skills'>
               <Skills/>
           </section>
           <section id='contact'>
               <Contacts/>
           </section>
           <section id='work'>
               <Work/>
           </section>
        </div>;
    
}

export default Body;
