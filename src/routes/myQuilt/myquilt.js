
import "./myquilt.css";
import TextContainer from '../../components/textcontainer';
import Help from "../help/help.js"
import Square from '../../components/square';
import {Outlet,Link} from "react-router-dom";
import React, { Fragment } from 'react';
import img12 from '../../userImages/12.jpg';
import img17 from '../../userImages/17.jpg';
import img14 from '../../userImages/18.jpg';
const MyQuilt = () =>{
    let mySquare = {"id":5,"image":[img12,img14,img17],"tags":["Home","Work","Community"],"caption":[],}
    return(
        <div className = "myQuilt-parent">
        <div className = "personal-square">
            <h1>My Quilt</h1>
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
            <h1>Display Name</h1>   
            <p>EMAIl@abbvie.com</p>
            <p>Function Name and Function Code</p>
            <p>Location</p>

        </div>
        <div className ="help-faq">
            <Help/>
        </div>
        <div className ="approved-images">

        </div>
        <div> </div>
        </div>
    );
}
export default MyQuilt;