import React from 'react';
import './square.css';

const Square = ({id,image,tags}) => {

    return(
        <div className = "square">
            <img alt = {'monster'} src = {'https://robohash.org/'+image+'?set=set4&size=200x200'}/>
            <p className='hide'>Tags:{tags}</p>
        </div>
    );
}

export default Square;