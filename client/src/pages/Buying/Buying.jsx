import React from 'react';
import './Buying.scss';


const Buying = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className="buying">
      <img src="./img/bt.jpg" alt="Landscape" />

      <h2>1. Registration and Account Setup:</h2>
      <p>Start by registering an account on ProTechGig.<br />
        Fill in your profile information, including your name, contact details, and payment preferences.
      </p>

      <h2>2. Browsing Services:</h2>
      <p>Browse through the various services offered by freelancers on ProTechGig.<br />
        Use search filters and categories to narrow down your options.
      </p>

      <h2>3. Select a Service:</h2>
      <p>Click on a service that interests you to view the freelancer profile and service details.<br />
        Check their portfolio, reviews, and ratings.
      </p>

      <h2>4. Contacting Freelancer:</h2>
      <p>If you have questions or need customizations, you can use ProTechGig's messaging system to contact the freelancer.<br />
        Discuss the project scope, deliverables, and pricing.
      </p>

      <h2>5. Placing an Order:</h2>
      <p>Once you are satisfied, click the Order Now button on the freelancer service page.<br />
        Choose any additional options or extras offered by the freelancer.
      </p>

      <h2>6. Payment and Milestones:</h2>
      <p>Enter your payment information and confirm your order.<br />
        ProTechGig can hold the payment in escrow until the freelancer delivers the work according to agreed-upon milestones.
      </p>

      <h2>7. Review & Confirmation:</h2>
      <p>Provide feedback and clarify expectations to ensure a smooth workflow.<br />
        Final confirmation is mandatory.
      </p>

      <h2>8. Payment And Feedback</h2>
      <p>Once you accept the work, ProTechGig will release the payment to the freelancer.<br />
        Leave a review and rate the freelancer based on your experience.<br />
        Your feedback will help other clients make informed decisions.
      </p>
    </div>
  );
};

export default Buying;
