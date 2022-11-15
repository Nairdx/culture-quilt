import React, { Fragment } from 'react';
import { useState } from 'react';
import './square.css';
import Modal from './modal';
import {useNavigate} from 'react-router-dom';
import myImage from '../square.png';
import {img1} from "./imageStore.js";
import abbvieGreen from "../abbvie_green.png";
import abbvieNavy from "../abbvie_navy.png";
import abbviePurple from "../abbvie_purple.png";
import abbvieBlack from "../abbvie_black.png"
const Square = ({id,image,tags,caption}) => {
    let id_val = id;
    let caption_val = caption;
    let background_image_arr = [{backgroundImage: `url(${abbvieNavy})`}, {backgroundImage: `url(${abbvieGreen})`},{backgroundImage: `url(${abbviePurple})`},{backgroundImage: `url(${abbvieBlack})`}];
    const [imageList, setimagelist] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalParams, setModalParams] = useState({});
    
    // setimagelist(image[0]);
    const Navigate = useNavigate();
    let b_idx = id % 4; 
    if (image && image.length === 3){
       
    return(
        <Fragment>
        <Modal open={openModal} onClose={() => setOpenModal(false)} props = {modalParams}/> 
        <div className = "square" style={background_image_arr[b_idx]}>
            {image.map((data,index) => (
                <img className = {index === 2 ? 'tilethree' : 'tile'} alt = {"square"} src = {data}  onClick={() => {setOpenModal(true); setModalParams({"id":id_val,"caption":caption_val,"image":data, "tags":tags}) }} />
            ))}
        </div>
        </Fragment>
    );
}

else if (image && image.length === 2){
        
    return(
        <Fragment>
        <Modal open={openModal} onClose={() => setOpenModal(false)} props = {modalParams}/> 
        <div className = "square" style={background_image_arr[b_idx]}>
            {image.map((data,index) => (
                <img className =  'tile-case2' alt = {"square"} src = {data}  onClick={() => {setOpenModal(true); setModalParams({"id":id_val,"caption":caption_val,"image":data, "tags":tags}) }} />
            ))}
        </div>
        </Fragment>
    );
}


else if (image && image.length === 1){
        
    return(
        <Fragment>
        <Modal open={openModal} onClose={() => setOpenModal(false)} props = {modalParams}/> 
        <div className = "square" style={background_image_arr[b_idx]}>
            {image.map((data,index) => (
                <img className = 'tile-case1' alt = {"square"} src = {data}  onClick={() => {setOpenModal(true); setModalParams({"id":id_val,"caption":caption_val,"image":data, "tags":tags}) }} />
            ))}
        </div>
        </Fragment>
    );
};


};

    {/* <p className='hide'>Tags:{tags[0]}</p> */}
    {/* setModalParams({state: {"id":id_val,"caption":caption_val,"image":data, "tags":tags}}) */}
    {/* <img alt = {id + 'square'} src = {'https://robohash.org/'+image+'?set=set4&size=200x200'}/> */}
    {/* <img className = "tile" alt = {"square"} src = {icon} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val,"image":icon}})}} />
    <img className = "tile" alt = {"square"} src = {icon1} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val}})}}/>
    <img className = "tile" alt = {"square"} src = {icon2} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val}})}}/>
    <p>{caption}</p> */}
    // <img className = {index === 2 ? 'tilethree' : 'tile'} alt = {"square"} src = {data} height = {150} width = {150} onClick = {()=>{Navigate("/view/imagepage",{state: {"id":id_val,"caption":caption_val,"image":data}})}} />
export default Square;