import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import './Profile.css'

const Profile = ({totalTimes}) => {
    const [breakTime, setBreakTime] = useState(0);
    useEffect(()=>{
        const getTime = localStorage.getItem('break-time');
        setBreakTime(getTime)
    },[breakTime])

    const handleBreakTime =(event)=>{
        const getTime = event.target.innerText;
        localStorage.setItem('break-time', getTime);
        setBreakTime(getTime);
    }
    const handleComplete =()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Done Your Activity',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
    }
    return (
        <div className='profile-container'>
            <div className='profile-section'>
                <img className='profile-image' src="images.jpg" alt="profilePhoto" />
                <div>
                    <h3>Md Masum Billah</h3>
                    <h5>Future MERN stack Developer</h5>
                </div>
            </div>
            <div>
                <h4>Add a Break</h4>
                <div className='btn-container'>
                    <button onClick={(e)=>handleBreakTime(e)} className="br-btn">10</button>
                    <button onClick={(e)=>handleBreakTime(e)} className="br-btn">15</button>
                    <button onClick={(e)=>handleBreakTime(e)} className="br-btn">20</button>
                    <button onClick={(e)=>handleBreakTime(e)} className="br-btn">30</button>
                    <button onClick={(e)=>handleBreakTime(e)} className="br-btn">35</button>
                </div>
            </div>
            <div>
                <h4>Activity Details</h4>
                <div>
                    <h3 className='show-time'>Excersize time : {totalTimes} Hrs</h3>
                    <h3 className='show-time'>Break time : {breakTime} Min</h3>
                </div>
                <div className='done-btn-container'>
                    <button onClick={handleComplete} className='done-btn'>Activity complete</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;