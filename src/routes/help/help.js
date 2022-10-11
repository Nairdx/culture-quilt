
import React, { Fragment } from "react";
import "./help.css";
import {Outlet,Link} from "react-router-dom";
import {useContext} from 'react';
import { UserContext } from '../../contexts/usercontext'; 
import {useNavigate} from 'react-router-dom';

const Help = ()=>{
    const Navigate = useNavigate();
    const {isAuthenticated} = useContext(UserContext);
    if(!isAuthenticated){
        Navigate("/culture-quilt");
    }
    return(
        <Fragment>
            <div className ="helplinks">
                <h1>Frequently Asked Questions</h1>
                <Link className = "help-page" to =' auth'>Why was my photo/caption rejected?</Link>
                <Link className = "help-page" to ='auth'>How to edit and or delete an uploaded photo?</Link>
                <Link className = "help-page" to ='auth'>What is the purpose of the culture quilt?</Link>
                <Link className = "help-page" to ='auth'>How do I search stuff in the culture quilt?</Link> 
            </div>
            <Outlet/>
        </Fragment>
    );
};
export default Help;