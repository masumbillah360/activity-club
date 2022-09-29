import React from 'react';
import './Activities.css'

const Activites = ({info}) => {
    const {title, desc, time, working_time }= info;

    return (
        <div className='article-perpage'>
            <img className='thumbnail' src={info.img} alt="img" />
            <h3>{title}</h3>
            <p>{desc?desc.slice(0,140)+"...":"not found"}</p>
            <h4>Time : {time} Hour</h4>
            <h5>Working Time : {working_time}</h5>
            <button className='add-btn'>Add To List</button>
        </div>
    );
};

export default Activites;