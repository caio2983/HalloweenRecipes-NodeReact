
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

  fastify.register(require('@fastify/cors'), {
    origin: '*', 
  });

 
fastify.get('/', async (request, reply) => { // Rota usada no componente do Carousel que está na home page
    try {
      const categorias = await prisma.receita.findMany(); 
      reply.send(categorias);
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });


fastify.get('/:id', async (request, reply) => { // Rota usada na navegação para as páginas de categorias de receitas.id : id da categoria de receita
    try {
      const { id } = request.params;
     
      const receitas = await prisma.receita.findMany({
        where: {categoriaId : parseInt(id)} // Exemplo: GET no /Beverages/:id faz com que o Prisma se comunique com a database
        // e retorne as receitas com categoriaId = id
      } 
     
      );
      
      reply.send(receitas);
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });



  fastify.get('/recipe/:recipeid', async (request, reply) => { // Rota usada na navegação para as páginas de receitas específicas
    try {
      const { recipeid } = request.params;
     
      const receitas = await prisma.receita.findMany({
        where: {id : parseInt(recipeid)} 
      } 
     
      );
      
      reply.send(receitas);
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



