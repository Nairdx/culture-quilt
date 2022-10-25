
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
            <h1 className = "submit-t">My Quilt Submit</h1>

       </div>
      <br />
      <br /> 

      <div className="image-upload">
        <label for="image-input">
            <img className = "upload-button" src={myImage}/>
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
                     <div className = "inner-cur-images" id = {idx}>
                     <img id={idx} alt = {idx} className = "displayed-image" src={URL.createObjectURL(image)} />
                     {/* <button onClick={()=>setSelectedImage((prevArr)=>[(prevArr.filter((_, i) => {console.log(prevArr); return i !== idx}))])}>Remove</button> */}
                     <button className = "cur-images-button"onClick={()=>setSelectedImage([...selectedImage.slice(0, idx),...selectedImage.slice(idx + 1)])}>Remove</button> 
                     </div>
                     ))}

                    <br />
                    {/* <button onClick={()=>setSelectedImage([])}>Remove</button> */}
                </div>
                )}

        </div>
        </div>
        );
    }
};

export default Submit;