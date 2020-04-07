import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import './style.css'

import Logo from '../../assets/logo.png'

import api from '../../services/api'

export default function NewQuote() {
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')

  const history = useHistory()

  const userId = localStorage.getItem('userId')
  const userSign = localStorage.getItem('userSign')

  async function handleNewQuote(e) {
    e.preventDefault()

    const data = { title, msg }

    try {
      await api.post('/quotes', data, {
        headers: {
          Authorization: userId,
          Signature: userSign,
        },
      })

      history.push('/profile')
    } catch (err) {
      alert('New Quote post error, try again.')
    }
  }

  return (
    <div className='new-quote-container'>
      <div className='content'>
        <section>
          <img className='logo' src={Logo} alt='Daily Quote' />

          <h1>Post your Quote</h1>
          <p>Write your Quote, give it a title and don't forget to sign it</p>

          <Link className='back-link' to='/profile'>
            <MdArrowBack size={20} color='#785d13' />
            Let's read more up to inspire!
          </Link>
        </section>
        <form onSubmit={handleNewQuote}>
          <input
            placeholder='Its impactful title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Your poetic Quote'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <button className='button' type='submit'>
            Post it!
          </button>
        </form>
      </div>
    </div>
  )
}
