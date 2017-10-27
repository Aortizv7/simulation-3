import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Profile.css'



class Profile extends Component {

  render() {
    
    return (
     <div>

        <div className="profilepic">
            <img src="" alt="to be cntd pic" />
          <Link to ="/edit/profile">
            <button>Edit Profile</button>
          </Link>
        </div>
     
        <div className="intro">
          <p>Hello this is some text</p>
        </div> 

        
        <div>
          <p className="reccomendation">Reccomended Friends</p>
          Sorted by 
          <select className="selectoptn" >
            <option >First Name</option>
            <option value="">Last Name</option>
            <option value="">Gender</option>
            <option value="">Hobby</option>
            <option value="">Hair Color</option>
            <option value="">Eye Color</option>
            <option value="">Birthday</option>
          </select>
        </div>

      </div>
    )
  }
}

export default Profile
