import React from "react";
import "./portfolio.css";
import img1 from "../../assets/moi1.jpg";
import img2 from "../../assets/moi2.jpg";
import img3 from "../../assets/moi3.jpg";
import img5 from "../../assets/moi5.jpg";
import img6 from "../../assets/moi6.jpg";
import img7 from "../../assets/moi7.jpg";
import img8 from "../../assets/moi4.jpg";
import img9 from "../../assets/moi3.jpg";
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
  
      id: 1,
      title:'Project '
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
                  NONE
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  NONE
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
