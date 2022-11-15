import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../contexts/usercontext';
import userdata from './replicaUserData';
import "./signin.css"



const SignIn = ()=>{
    // const [] = useState(formDefault);
    // const [] = useState();

    const Navigate = useNavigate();
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const {setIsAuthenticated} = useContext(UserContext);



    const submitHandler = (event)=>{
       let valid = undefined !== userdata.find((obj) => {return obj.username === username && obj.password === password})
       if (valid){
           setIsAuthenticated(true);
           Navigate('/submit'); 

           
       }

       
    }


    return(
        <div className = "signin">
            <div className = "total-cont">
            <div className = "signin-container">
                <h1>Sign in</h1>
            </div>
            <div className = "form-container">
            <form onSubmit={submitHandler}>
                <label className = "label-signin">Username</label>
                <input className = "inputfield" required type = 'text' name = "username" value = {username} onChange = {(e) => setusername(e.target.value)}></input>
                <label className = "label-signin">Password</label>
                <input className = "inputfield" required type = 'password' name = "password" value = {password} onChange = {(e) => setpassword(e.target.value)}></input>
                <button className ="input-button"type ="submit"> Submit</button>
            </form>
            </div>
            </div>
        </div>
    );

}
export default SignIn;