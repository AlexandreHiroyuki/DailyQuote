import React from 'react'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'

import './styles.css'

import Logo from '../../assets/logo.png'

export default function Login() {
  return (
    <div className='login-container'>
      <img className='logo' src={Logo} alt='Daily Quote' />
      <section className='form'>
        <p>Start writing now!</p>

        <form action=''>
          <h1>Login:</h1>
          <input placeholder='Your ID' />
          <button className='button' type='submit'>
            Login
          </button>

          <Link className='back-link' to='/register'>
            <MdEdit size={16} color='#785d13' />
            New on Daily Quote? Create an account.
          </Link>
        </form>
      </section>
    </div>
  )
}
