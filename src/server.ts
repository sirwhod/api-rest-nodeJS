import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'hello NodeJS!'
})

app
  .listen({
    port: 3333,
  })
  .then((port) => {
    console.log(`server listening on ${port}`)
  })
