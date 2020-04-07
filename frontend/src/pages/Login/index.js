import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'

import './styles.css'

import Logo from '../../assets/logo.png'

import api from '../../services/api'

export default function Login() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })

      localStorage.setItem('userId', id)
      localStorage.setItem('userSign', response.data.signature)

      history.push('/profile')
    } catch (err) {
      alert('Login error, try again.')
    }
  }

  return (
    <div className='login-container'>
      <img className='logo' src={Logo} alt='Daily Quote' />
      <section className='form'>
        <p>Start writing now!</p>

        <form onSubmit={handleLogin}>
          <h1>Login:</h1>
          <input
            placeholder='Your ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
