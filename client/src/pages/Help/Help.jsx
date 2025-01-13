import React from 'react';
import './Help.scss';

const Help = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div className="Help">
        <div className="landscape-image">
        <img src="./img/hs.jpg" alt="Help & Support Landscape" />
      </div>

      <div className='section'>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <p>
          Our FAQs section is designed to provide quick and straightforward answers to the most common questions our users have. These questions are categorized for easy navigation, and we update them regularly to reflect the latest platform features and changes.
        </p>
        <div>
          <b>Getting Started:</b> Answers to questions about creating an account, setting up profiles, and understanding how ProTechGig works.
        </div>
        <div>
          <b>Job Posting:</b> Information on how to post jobs and hire freelancers.
        </div>
        <div>
          <b>Working as a Freelancer:</b> Guidance for freelancers on how to find and complete projects, get paid, and maintain a good reputation on the platform.
        </div>
        <div>
          <b>Payment and Billing:</b> Details about how payments work, including fees, withdrawals, and refunds.
        </div>
        <div>
          <b>Account and Profile:</b> Information on managing your account, including changing passwords, updating contact information, and more.
        </div>
        <div>
          <b>Disputes and Resolutions:</b> Steps to take if you encounter issues with a project or another user on the platform.
        </div>
      </div>

      <div className='section'>
        <h2>For Connecting</h2>
        <p>
          Sometimes, your issue or query may not be covered in our FAQs. In such cases, do not hesitate to reach out to our dedicated support team. We offer multiple contact options, such as email and a dedicated support form. Our team is available 24/7 to assist you with any platform-related inquiries.
        </p>
        <div>
          <b>Email:</b> info@protechgig.com
        </div>
        <div>
          <b>Support Form:</b> www.protechgig.co.in/support
        </div>
      </div>

      <div className='section'>
        <h2>Community Forums</h2>
        <p>
          Join our thriving community of freelancers and clients on the ProTechGig Community Forums. Share your experiences, seek advice, and interact with others who use the platform. It is a great place to find tips, discuss issues, and learn from the collective wisdom of the ProTechGig community.
        </p>
      </div>

      <div className='section'>
        <h2>Feedback and Suggestions</h2>
        <p>
          We value your feedback, as it helps us improve our platform. If you have any suggestions, ideas, or concerns, please let us know through our feedback form. Your input is essential in shaping the future of ProTechGig.
        </p>
      </div>

      <div className='section'>
        <h2>Security and Safety</h2>
        <p>
          Learn how we keep your data and transactions secure on ProTechGig. Discover the safety measures we have in place to protect you while using our platform.
        </p>
      </div>

      <div className='section'>
        <h2>Conclusion</h2>
        <p>
          ProTechGig is committed to making your freelancing experience as enjoyable and productive as possible. We are here to provide the support you need and the resources to resolve any issues. Do not hesitate to contact us, explore our FAQs, or participate in our community to get the most out of your freelancing journey with us. Your success is our success. Thank you for choosing ProTechGig.
        </p>
      </div>
    </div>
  );
};

export default Help;
