import React from 'react';
import './Selling.scss';

const Selling = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className="selling">
    
      <img src="./img/st.jpg" alt="Selling on ProTechGig" />

      <p>
        Certainly, here are the steps for freelancers to start selling their services on ProTechGig, your freelancing platform:
      </p>

      <h2>1. Registration and Profile Setup:</h2>
      <p>
        Create an account on ProTechGig if you have not already.<br />
        Fill in your profile details, including a professional bio, portfolio, and relevant skills.<br />
        Upload a profile picture to establish trust with potential clients.
      </p>

      <h2>2. Create a Gig:</h2>
      <p>
        Click on the Sell a Service or Create a Gig button.<br />
        Describe your service, including its scope, deliverables, and any optional extras.<br />
        Set a competitive price for your service.
      </p>

      <h2>3. Portfolio and Samples:</h2>
      <p>
        Upload samples of your previous work to showcase your skills.<br />
        Clients often rely on your portfolio to assess your quality and style.
      </p>

      <h2>4. Set Packages and Pricing:</h2>
      <p>
        Offer different packages with varying levels of service.<br />
        Define clear pricing structures for each package, considering your time, effort, and expertise.
      </p>

      <h2>5. Promote Your Gig:</h2>
      <p>
        Share your Gig on your social media profiles, website, and other relevant platforms.<br />
        Encourage satisfied clients to leave reviews and ratings.
      </p>

      <h2>8. Deliver High-Quality Work:</h2>
      <p>
        Execute the project according to the client requirements.<br />
        Keep the client updated on your progress and ensure they are satisfied with the results.
      </p>

      <h2>9. Receive Payment:</h2>
      <p>
        After the client accepts the work, ProTechGig will release the payment to you.<br />
        Consider your pricing and ProTechGig fees when calculating your earnings.
      </p>

      <h2>10. Client Reviews:</h2>
      <p>
        Encourage clients to leave reviews and ratings.<br />
        Positive feedback can help attract more clients.
      </p>
    </div>
  );
};

export default Selling;
