import React from 'react'
import './services.css'
import ListServices from './listServices'
import {BiCheck} from "react-icons/bi"


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className='service'>
      <div className='service__head'>
      <h3>UI/Ux Design</h3>
      </div>
      <ul className='service__list'>
      <li>
      <BiCheck className='service__list-icon' />
      <p>Design of users interface with figma</p>
      </li>
      <li>
      <BiCheck className='service__list-icon' />
      <p>design of users interface with photshop</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>Manipulation of jframes contains in java</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>Design of flyer with photoshop</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>Design of flyer with figma</p>
      </li>
      
      
      </ul>
      </article>
      {/*end of ui/ux design*/}

      <article className='service'>
      <div className='service__head'>
      <h3>WEB DEVEPOPMENT</h3>
      </div>
      <ul className='service__list'>
      <li>
      <BiCheck className='service__list-icon' />
      <p>Expert in HTML for web devepment</p>
      </li>
      <li>
      <BiCheck className='service__list-icon' />
      <p>knolege in Manipulation of CSS in web development</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>knolege in JavaScript frame work</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>beginner in mern development</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>BACKEND and FRONTEND development</p>
      </li> 
      
      
      </ul>
      </article>
      {/*end web development*/}

      <article className='service'>
      <div className='service__head'>
      <h3>CONTENT CREATION</h3>
      </div>
      <ul className='service__list'>
      <li>
      <BiCheck className='service__list-icon' />
      <p>lorem ,ipsum sit aset consectetur elit</p>
      </li>
      <li>
      <BiCheck className='service__list-icon' />
      <p>lorem ,ipsum sit aset consectetur elit</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>lorem ,ipsum sit aset consectetur elit</p>
      </li> <li>
      <BiCheck className='service__list-icon' />
      <p>lorem ,ipsum sit aset consectetur elit</p>
      </li> 
       
     
      
      </ul>
      </article>
        <ListServices />
      </div>
    </section>
  );
}
export default Services;