const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();
module.exports = prisma;

async function main() {
  // const receita = await prisma.receita.create({
  //   data: {
  //     titulo: 'Halloween punch',
  //     descricao: 'This blood-red punch is perfect for a Halloween party. Just add a slug of gin or vodka for a grown-up version.',
  //     cookingTime: 'less than 30 mins',
  //     serves: 'Serves 10',
  //     font: ['https://www.bbc.co.uk/food/recipes/halloween_punch_45819'],
  //     ingredientes: [
  //       [
  //         "500ml/18fl oz cranberry juice",
  //         "1.5 litres/2½ pints lemonade",
  //         "3 limes, juice only",
  //         "large handful gummi worms"
  //       ]
         
        
  //     ],
  //     categoriaId: 2, 
  //   },
  // });
  // console.log(receita);

  const updatedReceita = await prisma.receita.update({
    where: {
      id: 3, 
    },
    data: {
     imageLink: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_punch_45819_16x9.jpg',

      // ingredientes: 
      //   [
      //     "125g/4½oz unsalted butter, softened",
      //     "75g/2¾oz caster sugar",
      //     "1 large free-range egg yolk",
      //     "½ tsp vanilla bean paste",
      //     "200g/7oz plain flour",
      //     "60g/2¼oz strawberry jam",
      //     "40g/1½oz dark chocolate, melted"
      //   ]
    },
  });
  
  console.log(updatedReceita);

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
