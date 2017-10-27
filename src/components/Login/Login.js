import React, { Component } from 'react'
import './Login.css';


export class Login extends Component {
  render() {
    return (
      <main className='main_background'>
        <section className='login_box'>
          <img alt='logo' />
          <div>Helo</div>
          <button>Login/Register</button>
        </section>
      </main>
    )
  }
}

export default Login
