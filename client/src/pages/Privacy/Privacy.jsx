import React from 'react';
import './Privacy.scss';


const Privacy = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return (
    <div className="privacy">
      <div className="landscape-image">
        <img src="./img/pp.jpg" alt="Privacy Policy Landscape" />
      </div>
      <div className="privacy-content">
      
        <p>By accessing or using ProTechGig, you agree to abide by these Terms, so please read them carefully.
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <h2>1. Log Files:</h2>
        <p>ProTechGig follows a standard procedure of using log files.<br />
            These files log visitors when they visit websites.<br />
            All hosting companies do this and a part of hosting services analytics.<br />
            The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),date and time stamp, referring/exit pages, and possibly the number of clicks.<br />
            These are not linked to any information that is personally identifiable.<br />
            The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.</p>

        <h2>2. Cookies and Web Beacons:</h2>
        <p>Like any other website, ProTechGig uses cookies.<br />
        These cookies are used to store information including visitors preferences, and the pages on the 
        website that the visitor accessed or visited.<br /> 
        The information is used to optimize the user experience by customizing our web page content based on 
        visitors browser type and/or other information.</p>

        <h2>3. Our Advertising Partners:</h2>
        <p>Some of advertisers on our site may use cookies and web beacons.<br />
        Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data.<br />
        For easier access, we hyperlinked to their Privacy Policies below.
         Google: 
         <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

        <h2>4. Privacy Policies:</h2>
        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of ProTechGig.<br />
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and
        links that appear on ProTechGig, which are sent directly to users browser.<br />
        They automatically receive your IP address when this occurs.<br />
        These technologies are used to measure the effectiveness of their advertising campaigns 
        and/or to personalize the advertising content that you see on websites that you visit.<br />
        <b>Note</b> that ProTechGig has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2>5. Third Party Privacy Policies:</h2>
        <p>ProTechGig Privacy Policy does not apply to other advertisers or websites.
            Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.<br />
            It may include their practices and instructions about how to opt-out of certain options.<br />
            You can choose to disable cookies through your individual browser options.<br />
            To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.</p>

        <h2>6. Children Information:</h2>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.<br />
            ProTechGig does not knowingly collect any Personal Identifiable Information from children under the age of 13.<br />
            If you think that your child provided this kind of information on our website, we strongly encourage you to contact us 
            immediately and we will do our best efforts to promptly remove such information from our records.</p>

        <h2>7. Online Privacy Policy & Consent:</h2>
        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information 
        that they shared and/or collect in ProTechGig.<br />
        This policy is not applicable to any information collected offline or via channels other than 
        this website.<br />
        By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </div>
  );
};

export default Privacy;
