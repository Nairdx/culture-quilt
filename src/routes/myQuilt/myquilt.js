
import "./myquilt.css";
// import TextContainer from '../../components/textcontainer';
// import Help from "../help/help.js"
import Square from '../../components/square';
import {Outlet,Link} from "react-router-dom";
import React, { Fragment } from 'react';
import img12 from '../../userImages/12.jpg';
import img17 from '../../userImages/17.jpg';
import img14 from '../../userImages/18.jpg';
const MyQuilt = () =>{
    let mySquare = {"id":5,"image":[img12,img14,img17],"tags":["Home",  "Work","Community"],"caption":[],}
    return(
        <div className = "myQuilt-parent">
        <div className = "personal-square">
            <h1 className = "myquilt-square-title">My Quilt</h1>
            <Square id = {mySquare.id} image = {mySquare.image} tags = {mySquare.tags} caption = {mySquare.caption}/>
            <Fragment>
                <div className ="submitlink">
                    <Link className = "help-page" to ='../submit'> <button className = "submit-edit-button-s">Submit</button></Link>
                    <Link className = "help-page" to ='../my-quilt-submission' state={{ square: mySquare }}> <button className = "submit-edit-button-e">Edit/Delete</button></Link>
                </div>
                <Outlet/>
            </Fragment>
        </div>
        <div className ="id-info">
            <h1 className="display-header">Deepak Nair</h1>   
            <p>deepak.nair@abbvie.com</p>
            <p>Student Developer, 61822</p>
            <p>Champaign, Illinois, U.S.A</p>

        </div>
        <div className ="help-faq-myq">
        <div className="helpheader-myquilt"> 
                <h1 style={{
                    paddingTop: '10px',
                    textAlign: 'center'
                }}>
                    Frequently Asked Questions
                </h1>
        </div>
                <div className = "help-g-myquilt">
                    <div className = "help-square-myq"> <Link className = "help-page" to =' auth'>Why was my photo/caption rejected?</Link></div>
                    <div className = "help-square-myq"><Link className = "help-page" to ='auth'>How to edit and or delete an uploaded photo?</Link></div>
                    <div className = "help-square-myq"><Link className = "help-page" to ='auth'>How do I search stuff in the culture quilt?</Link> </div>
                </div>
                
              
            <Outlet/>
        </div>
        <div className ="approved-images">
        <img className = "image_approve" alt = {"square"} src = {img12}/>
        <img className = "image_approve" alt = {"square"} src = {img17}/>
        <img className = "image_approve" alt = {"square"} src = {img14}/> 
        </div>
        <div> </div>
        </div>
    );
}
export default MyQuilt;