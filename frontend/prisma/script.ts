const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();
module.exports = prisma;

async function main() {
  const receitas = await prisma.receita.createMany({
    data: [
      {
        titulo: 'Halloween slash cake',
        descricao: "What says 'Halloween party' more than this cake? Fondant icing, strawberry jam and red food colouring are the secrets behind the 'blood' topping and filling",
        cookingTime: 'Prep: 45 mins / Cook: 30 mins',
        serves: 'Serves 16',
        font: ['https://www.bbcgoodfood.com/recipes/halloween-slash-cake'],
        ingredientes: [
          "140g unsalted butter, plus extra for the tin",
          "100ml grapeseed oil, or another flavourless oil",
          "200ml milk",
          "3 tbsp yogurt",
          "1 tsp vanilla extract",
          "2 large eggs, at room temperature",
          "250g light muscovado sugar",
          "250g plain flour",
          "3 tsp baking powder",
          "50g cocoa powder",
          "¾ x 340g jar strawberry jam",
          "1¼ kg ready-to-roll white fondant icing",
          ["For the buttercream",
          "600g icing sugar, sifted, plus extra for dusting",
          "300g butter, softened",
          "red food colouring"]
          
        ],
        categoriaId: 4,
        imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/halloween-slash-cake-d254648.jpg?quality=90&webp=true&resize=375,341'
      },
      // {
      //   titulo: 'Spooky Cookies',
      //   descricao: 'Terrifying cookies to impress your Halloween guests.',
      //   cookingTime: '1 hour',
      //   serves: 'Makes 24',
      //   font: ['https://www.bbc.co.uk/food/recipes/spooky_skeleton_cookies_58229'],
      //   ingredientes: [
      //     "200g/7oz plain flour",
      //     "100g/3.5oz sugar",
      //     "2 eggs",
      //     "Chocolate chips"
      //   ],
      //   categoriaId: 1,
      // },
      // {
      //   titulo: 'Spooky Cookies',
      //   descricao: 'Terrifying cookies to impress your Halloween guests.',
      //   cookingTime: '1 hour',
      //   serves: 'Makes 24',
      //   font: ['https://www.bbc.co.uk/food/recipes/spooky_skeleton_cookies_58229'],
      //   ingredientes: [
      //     "200g/7oz plain flour",
      //     "100g/3.5oz sugar",
      //     "2 eggs",
      //     "Chocolate chips"
      //   ],
      //   categoriaId: 1,
      // },
      // {
      //   titulo: 'Spooky Cookies',
      //   descricao: 'Terrifying cookies to impress your Halloween guests.',
      //   cookingTime: '1 hour',
      //   serves: 'Makes 24',
      //   font: ['https://www.bbc.co.uk/food/recipes/spooky_skeleton_cookies_58229'],
      //   ingredientes: [
      //     "200g/7oz plain flour",
      //     "100g/3.5oz sugar",
      //     "2 eggs",
      //     "Chocolate chips"
      //   ],
      //   categoriaId: 1,
      // },
      
      
    ],
    skipDuplicates: true, 
  });

  console.log(receitas);
}

//   // const updatedReceita = await prisma.receita.update({
//   //   where: {
//   //     id: 3, 
//   //   },
//   //   data: {
//   //    imageLink: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_punch_45819_16x9.jpg',

//   //     // ingredientes: 
//   //     //   [
//   //     //     "125g/4½oz unsalted butter, softened",
//   //     //     "75g/2¾oz caster sugar",
//   //     //     "1 large free-range egg yolk",
//   //     //     "½ tsp vanilla bean paste",
//   //     //     "200g/7oz plain flour",
//   //     //     "60g/2¼oz strawberry jam",
//   //     //     "40g/1½oz dark chocolate, melted"
//   //     //   ]
//   //   },
//   // });
  
//   // console.log(updatedReceita);

// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
