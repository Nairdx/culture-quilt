import React from 'react';
import Square from './square';
import "./quilt.css"


const Quilt = ({squareList}) => (
        <div className = "quilt">
            {squareList.map((square) => {
            return <Square id = {square.id} image = {square.image} tags = {square.tags}/>;})}
        </div>
);

export default Quilt;