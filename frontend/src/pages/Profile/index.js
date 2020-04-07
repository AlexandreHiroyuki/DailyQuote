import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdClear, MdDelete } from 'react-icons/md'

import './style.css'

import Logo from '../../assets/logo.png'

import api from '../../services/api'
import { useState } from 'react'

export default function Profile() {
  const [quotes, setQuotes] = useState([])

  const history = useHistory()

  const userId = localStorage.getItem('userId')
  const userSign = localStorage.getItem('userSign')

  useEffect(() => {
    api
      .get('/profile', {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        setQuotes(response.data)
      })
  }, [userId])

  async function handleDeleteQuote(id) {
    try {
      await api.delete(`quotes/${id}`, {
        headers: {
          Authorization: userId,
        },
      })

      setQuotes(quotes.filter((quote) => quote.id !== id))
    } catch (err) {
      alert('Delete Quote error, try again.')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className='profile-container'>
      <header>
        <img className='logo' src={Logo} alt='Daily Quote' />
        <span>Welcome, {userSign} </span>

        <Link className='button' to='/quotes/new'>
          Post your feeling of the day
        </Link>
        <button type='button' onClick={handleLogout}>
          <MdClear size={18} color='#211a05' />
        </button>
      </header>

      <h1>Daily Quotes</h1>

      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <strong>{quote.title}</strong>

            <p>{quote.msg}</p>

            <p className='signature'>{quote.user_sign}</p>

            <button type='button' onClick={() => handleDeleteQuote(quote.id)}>
              <MdDelete size={20} color='#211a05' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
