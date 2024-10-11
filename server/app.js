
const Fastify = require('fastify')
const fastify = Fastify({
    logger: true
  })

  const dotenv = require('dotenv');

dotenv.config();

const prisma = require('../frontend/prisma/script.ts');
  




fastify.register(require( "@fastify/postgres"), {
    connectionString: process.env.DATABASE_URL
  })



 
fastify.get('/', async (request, reply) => {
    try {
      const categorias = await prisma.receita.findMany(); 
      reply.send(categorias);
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
  

fastify.listen({ port: 5000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})
