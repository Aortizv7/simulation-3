import React, { Component } from 'react'
import './Login.css';


export class Login extends Component {
  render() {
    return (
      <main className='main_background'>
        <div className='box_position'>
          <section className='login_box'>
            <div className='logo'></div>
            <div className='helo'>Helo</div>
            <a href={process.env.REACT_APP_LOGIN}><button  className='login_button'>Login/Register</button></a>
          </section>
        </div>
      </main>
    )
  }
}

export default Login
