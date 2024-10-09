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
      font: ['https://www.bbc.co.uk/food/recipes/spooky_skeleton_cookies_58229','https://www.bbc.co.uk/food/chefs/liberty_mendez'],
      ingredientes: [
        "125g/4½oz unsalted butter, softened",
        "75g/2¾oz caster sugar",
        "1 large free-range egg yolk",
        "½ tsp vanilla bean paste",
        "200g/7oz plain flour",
        "60g/2¼oz strawberry jam",
        "40g/1½oz dark chocolate, melted"
      ],
      categoriaId: 5, 
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
