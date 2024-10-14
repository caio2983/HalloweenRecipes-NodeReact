const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();
module.exports = prisma;

async function main() {




  const receitas = await prisma.receita.createMany({
    data: [



      // {
      //   titulo: "Scary Eyeballs",
      //   descricao: "Kids will squeal with delight at the sight of these eyeball treats. But the peanut butter flavor is the best part! —Shannon Blatchley, Ludlow, Massachusetts",
      //   cookingTime: 'Prep: 50min + standing',
      //   serves: 'Serves 40',
      //   font: ['https://www.tasteofhome.com/recipes/scary-eyeballs/'],
      //   ingredientes: [
      //     [
      //       "1-1/2 cups creamy peanut butter",
      //       "1/2 cup butter, softened",
      //       "1 teaspoon vanilla extract",
      //       "3-3/4 cups confectioners' sugar",
      //       "12 ounces white candy coating, chopped",
      //       "1 tablespoon shortening",
      //       "40 milk chocolate M&M's, assorted colors",
      //       "Red decorating gel"
      //     ]
          
      //   ],
      //   categoriaId: 1,
      //   imageLink: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_HBZ16_34167_B05_05_5b-2.jpg?fit=700,700',
      //   instructions:[   [
      //     "In a small bowl, cream peanut butter and butter until light and fluffy. Beat in vanilla. Gradually beat in confectioners' sugar. Shape into 1-in. balls. Cover and refrigerate for at least 30 minutes."
      //   ],
      //   [
      //     "In a microwave-safe bowl, melt candy coating and shortening; stir until smooth. Dip peanut butter balls into coating; allow excess to drip off. Place on waxed paper. Place M&M's, plain side up, on top. Let stand until set. Use red gel to create 'bloodshot' eyes."
      //   ],
      //  ]
      // },



    ],
    skipDuplicates: true, 
  });
  console.log(receitas);
}



//   const updatedReceita = await prisma.receita.update({
//     where: {
//       id: 3, 
//     },
//     data: {
//     instructions: [  [
//       "Pour all of the ingredients into a large glass bowl and mix until well combined.",
//       "Drape the gummi worms over the edge of the bowl."
//     ]
// ],
//     },
//   });




  // const deletedReceita = await prisma.receita.delete({
  //   where: {
  //     id: 14, 
  //   },
   
  // });
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



  