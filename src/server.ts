import fastify from 'fastify'

import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then((port) => {
    console.log(`server listening on ${port}`)
  })
