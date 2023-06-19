import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";
import {BsPatchCheckFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      <div className="experience_frontend">
      <h3>FRONTEND DEVELOPMENT</h3>
      <div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>HTML</h4>
      <small className='text-light'>Expert</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>CSS</h4>
      <small className='text-light'>Expert</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>javascript</h4>
      <small className='text-light'>Intermidiate</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>React</h4>
      <small className='text-light'>Experienced</small>
      </article>
      </div>
      </div>
      
      <div className="experience_backend">
      <h3>BACKEND DEVELOPMENT</h3>
      <div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>noteJS</h4>
      <small className='text-light'>Expert</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>mongoDB</h4>
      <small className='text-light'>Expert</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>PHP</h4>
      <small className='text-light'>Intermidiate</small>
      </article>
      <article className="experience__details">
      <BsPatchCheckFill/>
      <h4>mysql</h4>
      <small className='text-light'>Experienced</small>
      </article>
      </div>
      </div>
      </div>
        <ListExperiences />
      
    </section>
  );
};
export default Experience;
