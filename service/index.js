/* eslint-disable unicorn/no-process-exit */
const path = require('path')
const { compileEmail } = require('dovetailer')
const fastify = require('fastify')({
  logger: true
})

const go = async (name, context) => {
  const pathName = path.resolve(__dirname, '../emails', name)
  return compileEmail(pathName, context)
}

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

fastify.post('/email', async ({ body }, reply) => {
  reply.send(await go(body.name, body.context))
})

start()
