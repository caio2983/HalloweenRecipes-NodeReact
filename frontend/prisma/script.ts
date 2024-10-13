const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');


dotenv.config()

const prisma = new PrismaClient();
module.exports = prisma;

async function main() {
  const receitas = await prisma.receita.createMany({
    data: [
      {
        titulo: "Halloween Franken-cupcakes",
        descricao: "Please your little monsters with these cute Franken-cupcakes for a Halloween party. They can even help decorate!",
        cookingTime: 'Cook : 30 mins to 1 hour',
        serves: 'Serves 9',
        font: ['https://www.bbc.co.uk/food/recipes/halloween_40352'],
        ingredientes: [
          [
            "For the cupcakes", 
            "125g/4½oz plain flour", 
            "25g/1oz cocoa powder", 
            "1½ tsp baking powder", 
            "150g/5oz caster sugar", 
            "150g/5oz unsalted butter, softened at room temperature", 
            "1 free-range egg", 
            "8 tbsp milk"
          ],
          
          [
            "For the buttercream", 
            "125g/4½oz unsalted butter, softened", 
            "250g/9oz icing sugar, sifted", 
            "1 tbsp milk", 
            "1 tsp vanilla extract", 
            "green food colouring paste", 
            "red food colouring paste"
          ],
        
          [
            "For decoration", 
            "Edible candy eyes", 
            "chocolate sprinkles", 
            "chocolate flake, crumbled", 
            "soft black licorice twists"
          ]
          
        ],
        categoriaId: 5,
        imageLink: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_40352_16x9.jpg',
        instructions:[   [
          "Preheat the oven to 180C/350F/Gas 4.",
          "Line a muffin tray with 9 paper cases."
        ],
      
        [
          "Sift the flour, cocoa powder and baking powder into a bowl.",
          "Add the sugar and butter and beat the mixture together until well combined."
        ],
      
        [
          "Whisk in the egg and milk until the mixture is thick and smooth."
        ],
      
        [
          "Divide the mixture between the paper case and bake in the oven for 20-25 minutes, or until springy to the touch and skewer inserted into the middle of one of the cakes comes out clean.",
          "Set aside to cool on a wire rack."
        ],
      
        [
          "Put the butter into a large bowl and beat with an electric hand mixer until light and fluffy."
        ],
      
        [
          "Sift in the icing sugar, then work it into the butter, starting slowly at first, then beating more vigorously once all the sugar is combined."
        ],
      
        [
          "Add the milk and the vanilla, then beat until creamy and smooth."
        ],
      
        [
          "Set aside 1 tablespoon of the icing to colour red.",
          "Colour the remaining icing green (you may need to add the tiniest amount of red to make an olive green colour)."
        ],
      
        [
          "Place a heaped tablespoon of icing on each cupcake.",
          "Use a palette knife to smooth the sides at an angle and flatten the top."
        ],
      
        [
          "Decorate with licorice twists, candy eyes, crumbled flaked chocolate and chocolate sprinkles.",
          "Use the red icing to draw on stitches with a cocktail stick."
        ]]
      },
      {
        titulo: "Halloween ghost cupcakes",
        descricao: "Halloween food doesn't have to be icky. These cute ghost cupcakes are great for younger kids' Halloween parties.",
        cookingTime: 'Prep: 30 mins to 1 hour // Cook : 30 mins to 1 hour',
        serves: 'Serves 18',
        font: ['https://www.bbc.co.uk/food/recipes/halloween_ghost_cupcakes_04170'],
        ingredientes: [
          [
            "140g/5oz butter, softened",
            "250g/9oz caster sugar",
            "2 free-range eggs, lightly beaten",
            "1 tsp vanilla extract"
          ],
          [
            "150g/5½oz plain flour",
            "75g/2½oz self-raising flour",
            "1 tsp bicarbonate of soda",
            "50g/2oz cocoa powder",
            "200ml/7fl oz buttermilk or plain yoghurt"
          ],
          [
            "For the marshmallow icing",
            "250g/9oz sugar",
            "120g/4½oz golden syrup",
            "4 free-range eggs, whites only",
            "2 tbsp chocolate sugar strands"
          ]
          
        ],
        categoriaId: 5,
        imageLink: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_ghost_cupcakes_04170_16x9.jpg',
        instructions:[    [
          "Preheat the oven to 180C/350F/Gas 4.",
          "Line twelve muffin tins with muffin cases."
        ],
        [
          "For the cakes, beat together the butter and sugar with a hand-held mixer until very light and fluffy.",
          "Add the eggs a little at a time beating well after each addition.",
          "Add the vanilla extract with the last of the egg."
        ],
        [
          "Sift together the flours, bicarbonate of soda and cocoa into a large mixing bowl."
        ],
        [
          "Gently fold the flour mix into the butter mixture along with the buttermilk until completely combined and smooth."
        ],
        [
          "Place a dessertspoonful of the batter into each muffin case then bake in the oven for 20 minutes until firm to the touch.",
          "Place on a wire rack to cool."
        ],
        [
          "For the icing, place the sugar, golden syrup and four tablespoons of water into a large saucepan.",
          "Heat gently, stirring until the sugar has dissolved."
        ],
        [
          "Bring the sugar syrup to the boil and cook for about 5-6 minutes until the syrup reaches 115C/239F when measured with a sugar thermometer.",
          "Remove the pan from the heat."
        ],
        [
          "While the syrup is boiling, in a large bowl whisk the egg whites with a hand-held mixer until soft peaks form when the whisk is removed."
        ],
        [
          "With the mixer on a low speed, pour in the sugar syrup in a thin steady stream.",
          "Be careful not to pour the syrup onto the beaters as it may splash onto your hands."
        ],
        [
          "Once all the syrup has been added increase the speed of the mixer and mix for about 10 minutes until the icing is completely cool, thick and glossy."
        ],
        [
          "Place the icing into a piping bag fitted with a large plain nozzle.",
          "Pipe a circle of icing onto each cupcake.",
          "Hold the bag upright over the centre of the cake, pipe a tall mound of icing, then quickly pull the tip away to form a small peak on the top."
        ],
        [
          "Add chocolate sugar strands for eyes or any decoration you fancy."
        ]]
      },

      // {
      //   titulo: 'Pumpkin cake',
      //   descricao: "Make this ghoulishly good Halloween pumpkin cake for a sweet party showstopper. It's great for using up leftover pumpkin and tastes similar to carrot cake.",
      //   cookingTime: 'Prep: 20 mins / Cook: 30 mins',
      //   serves: 'Serves 15',
      //   font: ['https://www.bbcgoodfood.com/recipes/halloween-pumpkin-cake'],
      //   ingredientes:  [[
      //     "For the cake",
      //     "300g self-raising flour",
      //     "300g light muscovado sugar",
      //     "3 tsp mixed spice",
      //     "2 tsp bicarbonate of soda",
      //     "175g sultanas",
      //     "½ tsp salt",
      //     "4 eggs, beaten",
      //     "200g butter, melted",
      //     "zest 1 orange",
      //     "1 tbsp orange juice",
      //     "500g (peeled weight) pumpkin or butternut squash flesh, grated"
      //   ],
      
      //   [
      //     "For drenching and frosting",
      //     "200g pack soft cheese",
      //     "85g butter, softened",
      //     "100g icing sugar, sifted",
      //     "zest 1 orange",
      //     "juice of half an orange"
      //   ]
      // ],
      //   categoriaId: 4,
      //   imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-364069_11-bc06aa2.jpg?quality=90&webp=true&resize=375,341',
      //   instructions:[ [
      //     [
         
      //       "Heat oven to 180C/fan 160C/gas 4.",
      //       "Butter and line a 30 x 20cm baking or small roasting tin with baking parchment.",
      //       "Put the flour, sugar, spice, bicarbonate of soda, sultanas, and salt into a large bowl and stir to combine."
      //     ],
      //     [
          
      //       "Beat the eggs into the melted butter, stir in the orange zest and juice, then mix with the dry ingredients till combined.",
      //       "Stir in the pumpkin.",
      //       "Pour the batter into the tin and bake for 30 minutes, or until golden and springy to the touch."
      //     ],
      //     [
       
      //       "To make the frosting, beat together the cheese, butter, icing sugar, orange zest, and 1 tsp of the juice till smooth and creamy, then set aside in the fridge.",
      //       "When the cake is done, cool for 5 mins then turn it onto a cooling rack.",
      //       "Prick it all over with a skewer and drizzle with the rest of the orange juice while still warm.",
      //       "Leave to cool completely."
      //     ],
      //     [
          
      //       "If you like, trim the edges of the cake.",
      //       "Give the frosting a quick beat to loosen, then, using a palette knife, spread over the top of the cake in peaks and swirls.",
      //       "If you’re making the cake ahead, keep it in the fridge then take out as many pieces as you want 30 mins or so before serving.",
      //       "Will keep, covered, for up to 3 days in the fridge."
      //     ]
      //   ] ]
      // },
      // {
      //   titulo: 'Haunted graveyard cake',
      //   descricao: "The perfect centrepiece for a Halloween celebration, this cake is guaranteed to make your party extra spooky",
      //   cookingTime: 'Prep: 45 mins / Cook: 2 hours',
      //   serves: 'Serves 10',
      //   font: ['https://www.bbcgoodfood.com/recipes/haunted-graveyard-cake'],
      //   ingredientes: [ [
      //     "To decorate",
      //     "1 egg white",
      //     "50g icing sugar",
      //     "200ml single cream",
      //     "200g dark chocolate, finely chopped",
      //     "125g rich tea finger biscuits",
      //     "100g double chocolate cookies",
      //     "25g white chocolate",
      //     "silver balls, to decorate"
      //   ],
      //   [
      //     "For the cake",
      //     "85g cocoa powder",
      //     "200g self-raising flour",
      //     "375g light brown muscovado sugar",
      //     "4 eggs",
      //     "200ml milk",
      //     "175ml vegetable oil"
      //   ] ],
      //   categoriaId: 4,
      //   imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-364045_12-82aa2e4.jpg?quality=90&webp=true&resize=375,341',
      //   instructions:[ [
      //     [
      //       "To make the ghosts",
      //       "Heat oven to 110C/90C fan/gas ¼.",
      //       "Whip the egg white in a clean bowl until stiff peaks form.",
      //       "Whisk in the sugar a tbsp at a time and keep whisking for a couple of mins until the mixture is thick and resembles shaving foam.",
      //       "Gently spoon the mixture into a large freezer bag, then cut a 1.5cm hole in one of the corners.",
      //       "Cover a baking sheet with some baking parchment.",
      //       "Carefully squeeze a small circle of whipped egg white out of the bag, pulling upwards as you do to make a ghost shape.",
      //       "Repeat until the mixture is used up – you should get about 15 ghosts.",
      //       "Bake for 1½ hrs until crisp.",
      //       "Can be stored in an airtight container for up to 2 days."
      //     ],
      //     [
      //       "Now make the cake",
      //       "Heat oven to 180C/160C fan/gas 4.",
      //       "Tip the cocoa powder, self-raising flour and sugar into a large bowl, breaking up any clumps of sugar.",
      //       "Mix together the eggs, milk and oil in a measuring cup or bowl, then pour over the dry ingredients and stir everything together until smooth.",
      //       "Grease and line a deep baking dish (20 x 30 x 5cm) with baking parchment.",
      //       "Pour in the cake mixture and bake for 30 mins.",
      //       "Leave to cool, then turn out onto a serving plate.",
      //       "Alternatively, wrap well and store for up to 2 days."
      //     ],
      //     [
      //       "Finish decorating the cake",
      //       "Heat cream in a saucepan until just boiling.",
      //       "Place the dark chocolate in a large bowl and pour over the hot cream.",
      //       "Stir until the chocolate melts.",
      //       "Use a clean brush to paint a layer of chocolate over 7 rich tea finger biscuits, then set aside to cool.",
      //       "Pour the rest of the chocolate mixture over the cake and smooth over with a knife.",
      //       "Whizz the chocolate cookies, or bash in a freezer bag with a rolling pin, until small crumbs form.",
      //       "Sprinkle over the top of the cake."
      //     ],
      //     [
      //       "For decoration",
      //       "Place the white chocolate in a small bowl, set over a pan of simmering water.",
      //       "Leave for 5 mins or until melted, then spoon into a small freezer bag.",
      //       "Wait for 10 mins so the mixture is not too runny, then cut a tiny hole in one corner of the bag.",
      //       "Pipe out 2 small blobs onto each ghost, place a silver ball on each to make eyes, then pipe out suitable words and shapes on the gravestones.",
      //       "Leave for 30 mins to set, then push the biscuit gravestones into the cake and arrange the ghosts around.",
      //       "To get the ghosts to ‘fly’, push a thin wire into the bottom of the ghost, then place in the cake, hiding the wire behind a gravestone."
      //     ]
      //   ] ]
      // },




      // {
      //   titulo: 'Pumpkin & caramel cake',
      //   descricao: "This cake uses a few shortcuts but the final result is a deliciously impressive dulce de leche and pumpkin spice-filled sponge",
      //   cookingTime: 'Prep: 45 mins / Cook: 30',
      //   serves: 'Serves 10-12',
      //   font: ['https://www.bbcgoodfood.com/recipes/pumpkin-caramel-cake'],
      //   ingredientes:[
      //     [
      //       "For the cake",
      //       "80ml vegetable oil, plus extra for greasing",
      //       "450g pack vanilla or white cake mix (or make your own cake mix, see tip below)",
      //       "½ x 425g can pumpkin purée",
      //       "125ml full-fat milk",
      //       "4 large eggs",
      //       "1 tsp pumpkin pie spice (available from uk.iherb.com, or mix it yourself by combining 1/2 tsp ground cinnamon, 1/4 tsp ground ginger, 1/4 tsp nutmeg and a pinch of ground cloves)"
      //     ],
      //     [
      //       "For the spread",
      //       "4 tbsp dulce de leche from a jar"
      //     ],
      //     [
      //       "For the filling",
      //       "225g full-fat cream cheese",
      //       "125g icing sugar, sifted",
      //       "1 tsp pumpkin pie spice",
      //       "½ x 425g can pumpkin purée",
      //       "440ml double cream"
      //     ],
      //     [
      //       "To decorate",
      //       "70g pecans, toasted and roughly chopped"
      //     ]
      //   ],
      //   categoriaId: 4,
      //   imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pumpkin-caramel-cake-0fafc3c.jpg?quality=90&webp=true&resize=375,341',
      //   instructions:[
      //     [
      //       "Heat oven to 180C/160C fan/gas 4.",
      //       "Grease and line the bases of two 23cm cake tins.",
      //       "In a big bowl, beat the oil, cake mix, pumpkin purée, milk, eggs and spice mixture until smooth.",
      //       "Pour the mixture into the cake tins and bake for 22-25 mins until a skewer inserted into the centre comes out clean.",
      //       "Cool in the tins while you make the filling."
      //     ],
      //     [
      //       "Beat the cream cheese briefly in a medium bowl until fluffy, then add the icing sugar, spice and pumpkin purée and beat until smooth.",
      //       "Be careful not to overbeat or it will go runny.",
      //       "In another bowl, whip the cream and fold it gently into the cream cheese mixture."
      //     ],
      //     [
      //       "When the cakes are cool, cut each one in half horizontally so you have four thin sponges.",
      //       "Put the bottom layer on a plate, spread with 1 tbsp dulce de leche, then smooth over a quarter of the filling.",
      //       "Add the next layer and repeat until you have an amazing tower of pumpkin, cake, caramel and cream, then sprinkle the pecans on top."
      //     ]
      //   ]
      // },



      
      
      
    ],
    skipDuplicates: true, 
  });

  console.log(receitas);
}

//   const updatedReceita = await prisma.receita.update({
//     where: {
//       id: 1, 
//     },
//     data: {
//     instructions: [ [
//       ["Preheat the oven to 180C/160C Fan/Gas 4 and line a large baking tray with baking paper."],
      
//       ["Put the butter and sugar in a bowl and beat until pale and fluffy. Add the egg yolk and vanilla and beat again until combined."],
      
//       ["Tip in the flour and beat until it forms a soft dough."],
      
//       ["Divide the mixture into 30g/1oz balls and flatten slightly. Push your index fingers into each dough ball to make two holes for the ‘eyes’. Place the biscuits on the baking tray, leaving space between them to allow for spreading during baking."],
      
//       ["Beat the jam to loosen it and fill each of the eye holes with jam, either with a teaspoon or with a piping bag."],
      
//       ["Bake for 12 minutes until golden around the edges and leave to cool completely on the baking tray."],
      
//       ["Transfer the melted chocolate to a small piping bag and cut a small hole in the end of it. Pipe a line for the mouth under the jammy eyes, and then pipe small vertical lines across the line to make it look like the mouth of a spooky skull."]
//     ]
// ],
//     },
//   });
  
//   console.log(updatedReceita);

//  }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });



  