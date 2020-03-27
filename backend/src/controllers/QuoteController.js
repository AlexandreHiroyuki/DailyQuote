const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const [count] = await connection('quotes').count()

    const quotes = await connection('quotes')
      .join('users', 'users.id', '=', 'quotes.user_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['quotes.*', 'users.greet', 'users.signature'])

    response.header('X-Total-Count', count['count(*)'])

    return response.json(quotes)
  },

  async create(request, response) {
    const { title, msg } = request.body
    const user_sign = request.headers.signature
    const user_id = request.headers.authorization

    const [id] = await connection('quotes').insert({
      title,
      msg,
      user_sign,
      user_id
    })

    return response.json({ id })
  },
  async delete(request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization

    const quote = await connection('quotes')
      .where('id', id)
      .select('user_id')
      .first()

    if (quote.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permited' })
    }

    await connection('quotes')
      .where('id', id)
      .delete()

    return response.status(204).send()
  }
}
