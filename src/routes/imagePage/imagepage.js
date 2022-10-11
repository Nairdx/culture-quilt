import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import myImage from '../../square.png';
import './imagepage.css';

const ImagePage = () =>{
    const Navigate = useNavigate();
    const Location = useLocation();
    return(
        <div className ="single-container">
                <button className='backbutton' onClick={() => Navigate(-1)}> Back </button>
                <img className = "imageptile" alt = {"square"} src = {Location.state.image}/>
            <div className = "caption-image-page">
                <p1>{Location.state.caption}</p1>
            </div>


         </div>
    );
}

export default ImagePage;