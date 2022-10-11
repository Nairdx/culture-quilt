
import "./textcontainer.css"

const TextContainer = (props) =>{

    return(
        <div className ="text-container">
            <h1>
                {props.title}
            </h1>   
            <p>
                {props.text}
            </p>
        </div>

    );

}
export default TextContainer;