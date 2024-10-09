const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();

async function main() {
  const receita = await prisma.receita.create({
    data: {
      titulo: 'Spooky Halloween cookies',
      descricao: 'These Halloween thumbprint cookies are a great baking project for the kids - super easy to make with delightfully spooky results!',
      cookingTime: '10 to 30 mins',
      serves: 'Makes 12–14',
      font: 'Autor da Receita',
      ingredientes: 'Farinha, açúcar, chocolate em pó, ovos, leite',
      categoriaId: 1, 
    },
  });
  console.log(receita);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
