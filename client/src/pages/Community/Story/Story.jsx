import React from 'react';
import './Story.scss';

const Story = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className="Story">
      <div className="center-box">
        <div className="landscape-image">
          <img src="./img/ss.jpg" alt="Image Description" />
        </div>
        <div className="about-content">
          <h2>Community Success Stories</h2>
          <div className="section"></div>
          <div className="story-section">
            <h3>1. David Journey</h3>
            <p>
              David, a software developer, had a dream to work on innovative projects.
              He joined ProTechGig to turn his passion into a career.<br />
              After delivering excellent results and receiving positive reviews, David's reputation on the platform grew.<br />
              He was eventually hired by a tech giant to work on a cutting-edge application.
              Today, David leads a team of developers and is recognized as a top expert in his field.
            </p>
          </div>
          <div className="section"></div>
          <div className="story-section">
            <h3>2. Emily Rise</h3>
            <p>
              Emily, a freelance writer, started her journey on ProTechGig as a college student looking to earn some extra income.<br />
              She offered content writing services and quickly gained a loyal clientele.<br />
              Her consistent high-quality work led to a referral from one client to another.
              Emily is now a full-time freelancer, working on diverse projects, and has even authored her own book.
            </p>
          </div>
          <div className="section"></div>
          <div className="story-section">
            <h3>3. Mark Artistic Triumph</h3>
            <p>
              Mark, an illustrator, joined ProTechGig to share his passion for art.
              He started by creating custom illustrations for clients and received glowing reviews.<br />
              One day, a well-known publishing house found his work and hired him to illustrate a children's book.<br />
              The book became a best-seller, and Mark's art was recognized globally. He now has a thriving career and offers art courses to aspiring artists within the ProTechGig community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
