import React, { Fragment } from 'react';
import "./home.css";
import Footer from '../../components/landingpage-footer';
import {Outlet,Link} from "react-router-dom";


const Home = () =>{
return( 
    <div className="landingPage">
            <Fragment>
            <div className ="loginlink">
                <Link className = "help-page" to ='auth'> <button className = "login-button">Login</button></Link>
            </div>
            <Outlet/>
        </Fragment>
        <div className = "landing-t">
            <h1 className='landing-titles'>Welcome to the RA &amp; RDQA Culture Quilt</h1>
            <p>
            The culture quilt provides a glimpse into the diversity of RA &amp; RDQA colleagues. This diversity shows up in skills, experiences, values, heritage and more, and ensures that RA & RDQA well placed to:
            </p>
            <ul className = "landing-list">
                <li>develop innovative solutions and approaches</li>
                <li>understand their business partners, customers and patients, and</li>
                <li>demonstrate cultural sensitivity and inclusivity.</li>
            </ul>
            <p>With this in mind, please use RA &amp; RDQA culture quilt internally only.</p>
        </div>
        

        <Footer/>
    </div>
  

);
};

export default Home;