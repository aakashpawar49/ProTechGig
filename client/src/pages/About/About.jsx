import React from 'react';
import './About.scss';

const About = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });

  return (
    <div className="about">
      <div className="landscape-image">
        <img src="./img/aboutus.jpg" alt="About Us Landscape" />
      </div>
      <div className="about-content">
        <section>
          <h2>Welcome to ProTechGig</h2>
          <p>
            ProTechGig is where tech enthusiasts, freelancers, and individuals come together to shape the future. Our platform is the nexus of innovation, where skills meet opportunities, and where businesses and individuals find the talent they need to succeed.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            At ProTechGig, our mission is to empower tech geeks to thrive. We're here to break barriers, connect talent with demand, and create a dynamic ecosystem that drives growth and innovation. We believe that every idea can change the world, and every freelancer can find their dream project.
          </p>
        </section>
        <section>
          <h2>Why ProTechGig?</h2>
          <p>
            With a passionate community, a user-friendly interface, and a commitment to excellence, we've created a space that fosters collaboration and empowers you to achieve your goals. Whether you're a freelancer showcasing your skills or an individual looking for the perfect gig, ProTechGig has you covered.
          </p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>
            Meet the dedicated team behind ProTechGig. We're tech enthusiasts, developers, designers, and entrepreneurs with a shared vision of making the gig economy more accessible and efficient. Our collective experience and expertise drive us to continually improve and enhance your experience on our platform. We are committed to providing exceptional support, ensuring that ProTechGig remains a trusted and reliable platform for all users.
          </p>
        </section>
        <section>
          <h2>Our Vision</h2>
          <p>
            ProTechGig envisions a future where every tech enthusiast can find their place, and every project can find its perfect match. We aspire to be the leading platform that promotes diversity, inclusivity, and opportunities in the tech industry. We're not just a website; we're a movement, and we're committed to making tech accessible to all.
          </p>
        </section>
        <section>
          <h2>Join the ProTechGig Community</h2>
          <p>
            Discover a world of opportunity. Whether you're a freelancer seeking exciting projects or an individual in need of tech expertise, ProTechGig is your gateway to a vibrant network of talent and innovation. Join us in shaping the future, as we work together to build a brighter, tech-savvy world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

