import {useState} from 'react';
import "./submitform.css";
const SubmitForm = (props) => {
    const [caption,setcaption] = useState("");
    const [tags, settags] = useState([]);
    const [editImage, seteditImage] = useState(props.editImage);
    if (props.sq){
    return(
        <div className = "submitform-parent">
            <div>
                <img className = "submitform-image" alt ="User Image 1" src ={props.sq.image[props.id]} />
            </div>
            <div className ="checkbox-block">
                <form className = "submit-tags">
                
                
                    <label for="Home"> Home
                    <input className="checkmark" type="checkbox" id="Home" name="Home" value="Home"></input>
                    </label>
                    
                    
                    <label for="Work">Work
                    <input className="checkmark" type="checkbox" id="Work" name="Work" value="Work"></input>
                    </label>
                    
                    <label for="Community">Community
                    <input className="checkmark" type="checkbox" id="Community" name="Community" value="Community"></input>
                    </label>
                    
                    <label for="Family">Family
                    <input className="checkmark" type="checkbox" id="Family" name="Family" value="Family"></input>
                    </label>

                    <label for="Travel">Travel
                    <input className="checkmark" type="checkbox" id="Travel" name="Travel" value="Travel"></input>
                    </label>
                    
                    <label for="Hobbies/Recreation">Hobbies/Recreation
                    <input className="checkmark" type="checkbox" id="Hobbies" name="Hobbies/Recreation" value="Hobbies/Recreation"></input>
                    </label>
                    
                    
                    <label for="Holiday/Celebration">Holiday/Celebration
                    <input  className="checkmark" type="checkbox" id="Holidays/Celebration" name="Holidays/Celebration" value="Boat"></input>
                    </label>
                </form>
            </div>
            <div className = "submit-caption">
                <form>
                <input className = "inputfield-submit" required type = 'text' name = "Enter Caption" value = {caption} onChange = {(e) => setcaption(e.target.value)}></input>
                <button className ="input-button"type ="submit"> Submit</button>
                </form>
            </div>

            
        </div>
    );
    };
};

export default SubmitForm;