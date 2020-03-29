import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import './styles.css'

import Logo from '../../assets/logo.png'

export default function Register() {
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img className='logo' src={Logo} alt='Daily Quote' />

          <h1>Account Creation</h1>
          <p>
            Create your account to share and read some nice random phrases, have
            many reflections or just have a nice day!
          </p>

          <Link className='back-link' to='/'>
            <MdArrowBack size={20} color='#785d13' />
            New on Daily Quote? Create an account.
          </Link>
        </section>
        <form action=''>
          <input placeholder='Your signature' />
          <input type='email' placeholder='Your e-mail' />
          <input placeholder='Some greeting' />

          <button className='button' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
