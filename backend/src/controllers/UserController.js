const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*')

    return response.json(users)
  },

  async create(request, response) {
    const { greet, signature, email } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('users').insert({
      id,
      greet,
      signature,
      email
    })

    return response.json({ id })
  }
}
