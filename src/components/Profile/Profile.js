import React from 'react';
import './Profile.css'

const Profile = () => {
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
                    <button className="br-btn">10</button>
                    <button className="br-btn">15</button>
                    <button className="br-btn">20</button>
                    <button className="br-btn">30</button>
                    <button className="br-btn">35</button>
                </div>
            </div>
            <div>
                <h4>Activity Details</h4>
                <div>
                    <h3 className='show-time'>Excersize time : 0 Hrs</h3>
                    <h3 className='show-time'>Break time : 0 Min</h3>
                </div>
                <div className='done-btn-container'>
                    <button className='done-btn'>Activity complete</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;