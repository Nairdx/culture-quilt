import { Fragment } from "react";
import {Outlet,Link} from "react-router-dom";
import Logo from '../../RDlogo.PNG'
import './nav.css';
import {useContext} from 'react';
import { UserContext } from '../../contexts/usercontext'; 
import {useNavigate} from 'react-router-dom';




const Navigator = () =>{

    const Navigate = useNavigate();
    const {isAuthenticated} = useContext(UserContext);
    if(!isAuthenticated){
        Navigate("culture-quilt");
    }
    else{
        return(
        <Fragment>  
            {/* <div className = "flex-contain"> */}
                {/* <div className = "logo-bar">
                <img className = "logo" alt = {"logo"} src = {Logo}/> */}
                {/* </div> */}
                {/* <div className = "non-logo-bar"> */}
                    {/* <div className = "titlebar">
                        <h1>Culture Quilt</h1>
                    </div> */}
                    <div className = "navbar">
                        <div className = "linkcontainer">
                            <Link className = "navlinktitle" to ='/culture-quilt'>
                                Culture Quilt
                            </Link>
                            <Link className = "navlink" to ='/view'>
                                View Quilt
                            </Link>
                            <Link className = "navlink" to='/myQuilt'>
                                My Quilt
                            </Link>
                            <Link className = "navlink" to ='/help' >
                                Help
                            </Link>
                            <Link className = "navlink" to ='/review' >
                                Approve
                            </Link>

                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
            <Outlet/>
        </Fragment>
        
        );
    }
};

export default Navigator;