import img12 from '../../userImages/12.jpg';
import img17 from '../../userImages/17.jpg';
import img14 from '../../userImages/18.jpg';
import './review.css'

const Review = () => {
    const data = {"user":"hello"};
    return(
        <div className = "review-Parent">
        <h1 className = "review-title">Approve or Reject</h1>
        <div className = "review-unit-design ">
        <div className = "review-unit">
        <img className = "image-approve" alt = {"square"} src = {img12}/>
        <input className = "inputfield-submit-review" required type = 'text' name = "Enter Caption" ></input>
        <button className ="input-button-g">Approve</button>
        <button className ="input-button-r">Reject</button>
        </div>

        <div className = "review-unit">
        <img className = "image-approve" alt = {"square"} src = {img17}/>
        <input className = "inputfield-submit-review" required type = 'text' name = "Enter Caption" ></input>
        <button className ="input-button-g">Approve</button>
        <button className ="input-button-r">Reject</button>
        </div>

        <div className = "review-unit">
        <img className = "image-approve" alt = {"square"} src = {img14}/>
        <input className = "inputfield-submit-review" required type = 'text' name = "Enter Caption" ></input>
        <button className ="input-button-g">Approve</button>
        <button className ="input-button-r">Reject</button>
        </div>
        </div>
        </div>
    );

};

export default Review;