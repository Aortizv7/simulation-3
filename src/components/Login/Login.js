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
            <button href={process.env.AUTH_LOGIN} className='login_button'>Login/Register</button>
          </section>
        </div>
      </main>
    )
  }
}

export default Login
