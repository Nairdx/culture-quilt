import React, { Fragment } from 'react';
import { useState } from 'react';
import './square.css';
import {useNavigate} from 'react-router-dom';
import myImage from '../square.png';
// import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img17, img14, img15, img16, img18, img19} from "./imageStore.js";

const Square = ({id,image,tags,caption}) => {
    let id_val = id;
    let caption_val = caption;
    const [imageList, setimagelist] = useState([]);
    // setimagelist(image[0]);
    const Navigate = useNavigate();
    
    if (image){
    
    return(
        <div className = "square">
            
            {/* <img alt = {id + 'square'} src = {'https://robohash.org/'+image+'?set=set4&size=200x200'}/> */}
            {/* <img className = "tile" alt = {"square"} src = {icon} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val,"image":icon}})}} />
            <img className = "tile" alt = {"square"} src = {icon1} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val}})}}/>
            <img className = "tile" alt = {"square"} src = {icon2} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val}})}}/>
            <p>{caption}</p> */}
            {image.map((data,index) => (
                
                <img className = {index === 2 ? 'tilethree' : 'tile'} alt = {"square"} src = {data} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val,"image":data}})}} />
    
            ))}
            {/* <p className='hide'>Tags:{tags[0]}</p> */}
  
            
            
        </div>
    );
};
};

export default Square;