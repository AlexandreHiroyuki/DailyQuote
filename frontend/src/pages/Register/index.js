import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import './styles.css'

import Logo from '../../assets/logo.png'

import api from '../../services/api'

export default function Register() {
  const [signature, setSignature] = useState('')
  const [email, setEmail] = useState('')
  const [greet, setGreeting] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      signature,
      email,
      greet,
    }

    try {
      const response = await api.post('users', data)

      alert(`Your acces ID: ${response.data.id}.`)

      history.push('/')
    } catch (err) {
      alert('Account creation error, try again.')
    }
  }

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
        <form onSubmit={handleRegister}>
          <input
            placeholder='Your signature'
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
          />
          <input
            type='email'
            placeholder='Your e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Some greeting'
            value={greet}
            onChange={(e) => setGreeting(e.target.value)}
          />

          <button className='button' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
