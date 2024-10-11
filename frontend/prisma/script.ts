const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();
module.exports = prisma;

async function main() {
  // const receita = await prisma.receita.create({
  //   data: {
  //     titulo: 'Vegan Halloween marble cake',
  //     descricao: 'This spooktacular Halloween cake is made without dairy or eggs, making it great for vegans or those with food allergies. Get messy with the dark chocolate drip to create this fabulous melted black candle design. Decorate the top of the cake with a black, white or gold candle and around the cake with creepy skeletons, spiders and cobwebs for extra drama.',
  //     cookingTime: 'Preparation : over 2 hours / Cooking : 30mins to 1 hour',
  //     serves: 'Serves 8–10',
  //     font: ['https://www.bbc.co.uk/food/recipes/vegan_halloween_marble_33254','https://www.bbc.co.uk/food/chefs/sanjana_modha'],
  //     ingredientes: [
  //     [ "For the cake",
  //       "185g/6½oz unsweetened soya yoghurt, at room temperature",
  //       "185ml/6½fl oz unsweetened soya milk, at room temperature",
  //       "2 tsp apple cider vinegar or distilled white vinegar",
  //       "140ml/4¾fl oz neutral oil (such as vegetable), plus extra for greasing",
  //       "1 tbsp vanilla extract",
  //       "350g/12oz self-raising flour",
  //       "1 tbsp cornflour",
  //       "1 tsp baking powder",
  //       "275g/9¾oz caster sugar",
  //       "pinch fine salt",
  //       "4 tbsp unsweetened soya milk, hot",
  //       "3 tbsp cocoa powder",
  //       "½ tsp orange gel food colouring"],
  //       [  "For the black buttercream",
  //         "250g/9oz vegan baking spread, softened",
  //         "500g/1lb 2oz icing sugar, sifted",
  //         "2–3 tsp black gel food colouring",
  //         "2 tsp vanilla extract",
  //         "1 tbsp unsweetened soya milk",
  //         "For the melted candle drip",
  //         "150g/5½oz vegan dark chocolate",
  //         "25g/1oz vegan butter",
  //         "1 tsp black gel food colouring"]
         
        
  //     ],
  //     categoriaId: 4, 
  //   },
  // });
  // console.log(receita);

  const updatedReceita = await prisma.receita.update({
    where: {
      id: 1, 
    },
    data: {
      // imageLink: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/vegan_halloween_marble_33254_16x9.jpg',

      ingredientes: 
        [
          "125g/4½oz unsalted butter, softened",
          "75g/2¾oz caster sugar",
          "1 large free-range egg yolk",
          "½ tsp vanilla bean paste",
          "200g/7oz plain flour",
          "60g/2¼oz strawberry jam",
          "40g/1½oz dark chocolate, melted"
        ]
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
