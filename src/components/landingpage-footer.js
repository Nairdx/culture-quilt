import React from 'react';
import "./landingpage-footer.css";
import TextContainer from './textcontainer';


const Footer = ()=>{
    return(
        <div className = "footer">
            <div className = "text-container-l">
            <h1 className ="footer-title">We hope you'll contribute to the RA &amp; RDQA Culture Quilt!</h1>
            <ul className="footer-list">
                <li>You can submit up to three digital photos. Each photo should represent what culture means to you and can include people, food, places - anything that represents your culture at home or work</li>
                <li>For each photo, you'll provide information that helps us understand your photo: where it was taken, why it's important to you, how it reflects their culture. Note that releases will be requested for each person in the photo(s) you submit.</li>
                <li>You can change your photos every 4 months</li>
            </ul>
            </div>
            <div className = "text-container-r">
                <h1 className ="footer-title">You can use the Culture Quilt in a number of ways…</h1>
                <ul>
                    <li>Learn more about your RA &amp; RDQA colleagues</li>
                    <li>Sort by function or team to start a discussion about the value of diversity</li>
                    <li>Explore different tags to find connections and common interests</li>
                    <li>And so much more!</li>
                </ul>
            </div>
        </div>
    );

};

export default Footer;

            
            
