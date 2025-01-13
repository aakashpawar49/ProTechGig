import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Featured />
      
        
      
      <div className="explore">
        <div className="container">
        <h1>Featured Gigs</h1>
      
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img src="./img/world-wide-web.png" alt="exp" />
              <div className="line"></div>
              <span>
                <Link className="link menuLink" to="/gigs?cat=web">
                Website Developers
                </Link>
            </span>
            </div>
            <div className="item">
              <img
                src="./img/mobile-development.png"
                alt=""
              />
              <div className="line"></div>

              <span>
                <Link className="link menuLink" to="/gigs?cat=app">
                App Craftsmen
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="./img/game-development.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=game">
              Game Creators
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/artificial-intelligence.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=ai">
              AI Visionaries
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/business-analysis.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=data">
              Data Analyst
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/ui.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=uix">
              UI/UX Developers
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/devops.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=dev">
              DevOPs Engineers
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/cloud-computing.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=cloud">
              Cloud Wizards
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/cyber-security.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=cyber">
              Cyber Guardians
            </Link></span>
            </div>
            <div className="item">
              <img
                src="./img/software.png"
                alt=""
              />
              <div className="line"></div>
              <span><Link className="link menuLink" to="/gigs?cat=soft">
              Software Builders
            </Link></span>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default Home;
