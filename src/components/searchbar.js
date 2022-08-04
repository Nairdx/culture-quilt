import React from 'react';

const Searchbar = ({fieldChangeHandler}) => {
    return(
        <input className = "SearchBox" type = 'search' placeholder ="search culture quilt" onChange={fieldChangeHandler}></input>
    );
}

export default Searchbar;