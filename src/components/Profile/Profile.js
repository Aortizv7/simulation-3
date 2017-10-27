import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

export class EditProfile extends Component {
  constructor(){
    super();

    this.state={
      selected: options[0]
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(option){
    console.log('You selected', option.label)
    this.setState({selected:option})
  }

  render() {
    const options=['First Name','Last Name','Gender','Hobby','Hair Color','Eye Color','Birthday'];
    const defaultOption = options[0];
    return (
     <div>

        <div className="">
          <img src="" alt="to be cntd pic" />
          <button>Edit Profile</button>
        </div>
     
        <div className="intro">
          <p>Hello this is some text</p>
        </div> 

        <div>
          Sorted by<Dropdown options = { options } onChange={this._onSelect} value={defaultOption} placeholder ="Select an option"/>
        </div>

      </div>
    )
  }
}

export default EditProfile
