import SubmitForm from "../../components/submitform";
import { useLocation } from 'react-router-dom'
import "./usersubmit.css"
const UserSubmit = () => {
    const location = useLocation()
    const {square}= location.state;
    return(
        <div className = "userSubmit-Parent">
            <h1>Submit</h1>
            <div className = "userSubmit-Grid">
                <SubmitForm sq = {square} id = {0}/>
                <SubmitForm sq = {square} id = {1}/>
                <SubmitForm sq = {square} id = {2}/>
            </div>
        </div>
    );

};

export default UserSubmit;