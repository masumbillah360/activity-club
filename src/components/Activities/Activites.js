import React from 'react';
import './Activities.css'

const Activites = ({info}) => {
    // console.log(info);
    return (
        <div>
            <img className='thumbnail' src={info.img} alt="img" />
            <h1>{info.title}</h1>
            <p>{info.id}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Activites;