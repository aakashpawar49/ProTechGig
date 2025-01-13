import React from 'react';
import './Standards.scss';

const Standards = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className="standards">
      <div className="center-box">
        <div className="landscape-image">
          <img src="./img/cs.jpg" alt="Image Description" />
        </div>
        <div className="about-content">
          <h2>Community Standards</h2>
          <p>
            Welcome to ProTechGig, where talent and opportunity meet!<br />
            Our community standards are the foundation of our platform, ensuring a safe and respectful space for all our members.<br />
            By adhering to these standards, we create an environment where high-quality work, fairness, and respect prevail.
            Please take a moment to familiarize yourself with our community guidelines and help us maintain a welcoming and thriving ecosystem for everyone.
          </p>

          <div className="section">
            <h3>1. Respect and Professionalism:</h3>
            <p>Treat all members with respect and professionalism.</p>
            <p>Maintain courteous and clear communication.</p>
            <p>Avoid discrimination, harassment, hate speech, or offensive content.</p>
          </div>

          <div className="section">
            <h3>2. Honesty and Transparency:</h3>
            <p>Provide accurate information in profiles, listings, and reviews.</p>
            <p>Avoid fraudulent or misleading actions, such as fake reviews.</p>
          </div>

          <div className="section">
            <h3>3. Privacy and Data Security:</h3>
            <p>Protect the privacy and confidentiality of clients and freelancers.</p>
            <p>Avoid sharing personal contact information within the platform.</p>
          </div>

          <div className="section">
            <h3>4. Intellectual Property:</h3>
            <p>Respect copyright, trademark, and intellectual property rights.</p>
            <p>Do not offer or request services that violate these rights.</p>
          </div>

          <div className="section">
            <h3>5. Payment and Disputes:</h3>
            <p>Payment should be prompt and fair.</p>
            <p>Resolve disputes through the platform resolution process.</p>
          </div>

          <div className="section">
            <h3>6. Security:</h3>
            <p>Use strong passwords and protect your account from unauthorized access.</p>
            <p>Report any security concerns promptly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
