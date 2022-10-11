
import myImage from '../../upload-favi.PNG';
import React from 'react';
import './submit.css'
import {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../contexts/usercontext'; 
import {useNavigate} from 'react-router-dom';
import TextContainer from '../../components/textcontainer';

const Submit = () => {
    const Navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState([]);
    const {isAuthenticated} = useContext(UserContext);
    function isFileImage(file) {
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    
        return file && acceptedImageTypes.includes(file['type'])
    }
    let i = 0;
    if(!isAuthenticated){
        Navigate("/culture-quilt");
    }
    else{
        return(
        <div className = "submit-parent">
            <div>
            <h1>My Quilt Submit</h1>

       </div>
      <br />
     
      <br /> 

      <div class="image-upload">
        <label for="image-input">
            <img src={myImage} width = {300} height = {300} />
        </label>
            
      <input
        id = "image-input"
        type="file"
        name="myImage"
        
        onChange={(event) => {console.log(event.target.files[0]);
            if (selectedImage.length <= 2 && isFileImage(event.target.files[0]) ){
            setSelectedImage((prevArr) => [...prevArr,(event.target.files[0])]);}
            else if(!isFileImage(event.target.files[0])){
                alert("File is not in appropriate format")

            }
            else{
                alert("Maximum of three images")
            }
            }}/>
        </div>

        <div>
        {selectedImage && ( 
                <div className = "current-images">
                     {selectedImage.length >=0 &&  selectedImage.map((image, idx) => (
                     <img id={idx} alt = {idx} style={{width: 150, height: 150}} src={URL.createObjectURL(image)} />
                     ))}

                    <br />
                    <button onClick={()=>setSelectedImage([])}>Remove</button>
                </div>
                )}

        </div>
        </div>
        );
    }
};

export default Submit;