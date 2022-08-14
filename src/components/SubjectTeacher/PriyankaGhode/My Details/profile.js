import React from 'react';
import './profile.css';

function profile(){
    return (
        <div className='profile-main'>
            <div className="profile">
            <div className="profile_box">
            <label className="security">Security Setting</label><br />
            <input className="update" type="text" name="username" placeholder="Username" /><br />
            <input className="update" type="text" name="cur_pass" placeholder="Current Password" /><br />
            <input className="update" type="text" name="new_pass" placeholder="New Password" /><br />
            <button className="submit">Submit</button>
            </div>
            </div>
    

     <div className="profile_box2">
        <label className="security">Account Setting</label><br />
        <input className="upadateLeft" type="text" name="fname" placeholder="First name" />
        <input className="upadateRight" type="text" name="lname" placeholder="Last name" />
        <select className="upadateLeft" name="gender" placeholder="Gender">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <input className="upadateRight" type="text" name="number" placeholder="Mobile no" />
        <input className="upadateLeft" type="email" name="email" placeholder="Email" />
        <input className="upadateRight" type="text" name="degree" placeholder="Degree" />
        <input className="upadateRight fileImg" type="file" name="number" placeholder="Image" /><br />
        <button className="submit">Submit</button>
     </div>
</div>);
}

export default profile;