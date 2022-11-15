import React from 'react';
import "./modal.css";


const Modal = ({ open, onClose, props }) => {
  if (!open) return null;
  if(props){
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className ="single-container">
            <figure>
              <img className = "imageptile" alt = {"square"} src = {props.image}/>
              <figcaption className = "fig-caption">{props.caption}</figcaption> 
            </figure>
            <div className = "caption-image">
             <p1>{props.tags}</p1> 
            </div>
         </div>
        </div>
      </div>
    </div>
  );
  };
};


export default Modal;