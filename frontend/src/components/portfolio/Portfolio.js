import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.PNG";
import img2 from "../../assets/img2.PNG";
import img3 from "../../assets/img3.PNG";
import img5 from "../../assets/img5.PNG";
import img6 from "../../assets/img1.PNG";
import img7 from "../../assets/img5.PNG";
import img8 from "../../assets/img2.PNG";
import img9 from "../../assets/img3.PNG";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com/djoumesssiivan/Portfolio/tree/master/frontend',
      demo: '',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com/djoumesssiivan/Portfolio/tree/master/backend',
      demo: '',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      vercel: 'https://djoumessiivan.vercel.app',
      demo: '',
      id: 4,
      title:'Project 4'
    },
    {
      image : img5,
      render: 'https://github.com',
      demo: '',
      id: 5,
      title:'Project 5'
    },
    {
      image : img6,
      github: 'https://github.com',
      demo: '',
      id: 6,
      title:'Project 6'
    },
      {
      image : img9,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 7,
      title:'Project 7'
    },
  
   
   
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
<ListPortfolio/>  
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
