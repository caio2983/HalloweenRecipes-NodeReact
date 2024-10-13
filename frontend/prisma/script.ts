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
        imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/halloween-slash-cake-d254648.jpg?quality=90&webp=true&resize=375,341',
        instructions:[[
          "Heat the oven to 180C/160C fan/gas 4.",
          "Butter and line the bases of two 20cm sandwich tins.",
          "Melt the butter in a pan, then remove from the heat and beat in the oil, milk, yogurt, vanilla and eggs.",
          "Whisk the dry ingredients together with a large pinch of salt, squishing any lumps of sugar with your fingers.",
          "Tip the wet ingredients into the dry, then whisk until smooth."
        ],
        [
          "Divide the batter between the tins and bake for 25-30 mins on the same shelf of the oven until risen and a skewer inserted into the middle comes out clean.",
          "Leave to cool for 10 mins in the tins, then transfer to a rack to cool completely."
        ],
        [
          "To make the buttercream, beat together the sugar, butter and a few drops of the red food colouring.",
          "Add 2-3 tbsp of boiling water if needed to soften the mixture, until you end up with a smooth, spreadable icing."
        ],
        [
          "Trim the cakes flat if needed, then halve each through the middle using a large serrated knife.",
          "Put one cake layer on a board or plate, spread over a thin layer of the buttercream and dot over a third of the jam.",
          "Top with another cake layer and repeat with the buttercream, jam and cake, finishing with a layer of cake.",
          "Use most of the remaining buttercream to ice the cake all over, reserving a small amount."
        ],
        [
          "Roll the fondant icing out on a surface dusted with icing sugar until large enough to cover the top and sides of the cake.",
          "Carefully lift it up onto the cake and smooth down to help it to stick.",
          "Use a sharp knife to cut slashes into the icing, then drizzle a little of the reserved buttercream mixed with some water into each to look like blood."
        ] ]
      },
      {
        titulo: 'Pumpkin cake',
        descricao: "Make this ghoulishly good Halloween pumpkin cake for a sweet party showstopper. It's great for using up leftover pumpkin and tastes similar to carrot cake.",
        cookingTime: 'Prep: 20 mins / Cook: 30 mins',
        serves: 'Serves 15',
        font: ['https://www.bbcgoodfood.com/recipes/halloween-pumpkin-cake'],
        ingredientes:  [[
          "For the cake",
          "300g self-raising flour",
          "300g light muscovado sugar",
          "3 tsp mixed spice",
          "2 tsp bicarbonate of soda",
          "175g sultanas",
          "½ tsp salt",
          "4 eggs, beaten",
          "200g butter, melted",
          "zest 1 orange",
          "1 tbsp orange juice",
          "500g (peeled weight) pumpkin or butternut squash flesh, grated"
        ],
      
        [
          "For drenching and frosting",
          "200g pack soft cheese",
          "85g butter, softened",
          "100g icing sugar, sifted",
          "zest 1 orange",
          "juice of half an orange"
        ]
      ],
        categoriaId: 4,
        imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-364069_11-bc06aa2.jpg?quality=90&webp=true&resize=375,341',
        instructions:[ [
          [
         
            "Heat oven to 180C/fan 160C/gas 4.",
            "Butter and line a 30 x 20cm baking or small roasting tin with baking parchment.",
            "Put the flour, sugar, spice, bicarbonate of soda, sultanas, and salt into a large bowl and stir to combine."
          ],
          [
          
            "Beat the eggs into the melted butter, stir in the orange zest and juice, then mix with the dry ingredients till combined.",
            "Stir in the pumpkin.",
            "Pour the batter into the tin and bake for 30 minutes, or until golden and springy to the touch."
          ],
          [
       
            "To make the frosting, beat together the cheese, butter, icing sugar, orange zest, and 1 tsp of the juice till smooth and creamy, then set aside in the fridge.",
            "When the cake is done, cool for 5 mins then turn it onto a cooling rack.",
            "Prick it all over with a skewer and drizzle with the rest of the orange juice while still warm.",
            "Leave to cool completely."
          ],
          [
          
            "If you like, trim the edges of the cake.",
            "Give the frosting a quick beat to loosen, then, using a palette knife, spread over the top of the cake in peaks and swirls.",
            "If you’re making the cake ahead, keep it in the fridge then take out as many pieces as you want 30 mins or so before serving.",
            "Will keep, covered, for up to 3 days in the fridge."
          ]
        ] ]
      },
      {
        titulo: 'Haunted graveyard cake',
        descricao: "The perfect centrepiece for a Halloween celebration, this cake is guaranteed to make your party extra spooky",
        cookingTime: 'Prep: 45 mins / Cook: 2 hours',
        serves: 'Serves 10',
        font: ['https://www.bbcgoodfood.com/recipes/haunted-graveyard-cake'],
        ingredientes: [ [
          "To decorate",
          "1 egg white",
          "50g icing sugar",
          "200ml single cream",
          "200g dark chocolate, finely chopped",
          "125g rich tea finger biscuits",
          "100g double chocolate cookies",
          "25g white chocolate",
          "silver balls, to decorate"
        ],
        [
          "For the cake",
          "85g cocoa powder",
          "200g self-raising flour",
          "375g light brown muscovado sugar",
          "4 eggs",
          "200ml milk",
          "175ml vegetable oil"
        ] ],
        categoriaId: 4,
        imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-364045_12-82aa2e4.jpg?quality=90&webp=true&resize=375,341',
        instructions:[ [
          [
            "To make the ghosts",
            "Heat oven to 110C/90C fan/gas ¼.",
            "Whip the egg white in a clean bowl until stiff peaks form.",
            "Whisk in the sugar a tbsp at a time and keep whisking for a couple of mins until the mixture is thick and resembles shaving foam.",
            "Gently spoon the mixture into a large freezer bag, then cut a 1.5cm hole in one of the corners.",
            "Cover a baking sheet with some baking parchment.",
            "Carefully squeeze a small circle of whipped egg white out of the bag, pulling upwards as you do to make a ghost shape.",
            "Repeat until the mixture is used up – you should get about 15 ghosts.",
            "Bake for 1½ hrs until crisp.",
            "Can be stored in an airtight container for up to 2 days."
          ],
          [
            "Now make the cake",
            "Heat oven to 180C/160C fan/gas 4.",
            "Tip the cocoa powder, self-raising flour and sugar into a large bowl, breaking up any clumps of sugar.",
            "Mix together the eggs, milk and oil in a measuring cup or bowl, then pour over the dry ingredients and stir everything together until smooth.",
            "Grease and line a deep baking dish (20 x 30 x 5cm) with baking parchment.",
            "Pour in the cake mixture and bake for 30 mins.",
            "Leave to cool, then turn out onto a serving plate.",
            "Alternatively, wrap well and store for up to 2 days."
          ],
          [
            "Finish decorating the cake",
            "Heat cream in a saucepan until just boiling.",
            "Place the dark chocolate in a large bowl and pour over the hot cream.",
            "Stir until the chocolate melts.",
            "Use a clean brush to paint a layer of chocolate over 7 rich tea finger biscuits, then set aside to cool.",
            "Pour the rest of the chocolate mixture over the cake and smooth over with a knife.",
            "Whizz the chocolate cookies, or bash in a freezer bag with a rolling pin, until small crumbs form.",
            "Sprinkle over the top of the cake."
          ],
          [
            "For decoration",
            "Place the white chocolate in a small bowl, set over a pan of simmering water.",
            "Leave for 5 mins or until melted, then spoon into a small freezer bag.",
            "Wait for 10 mins so the mixture is not too runny, then cut a tiny hole in one corner of the bag.",
            "Pipe out 2 small blobs onto each ghost, place a silver ball on each to make eyes, then pipe out suitable words and shapes on the gravestones.",
            "Leave for 30 mins to set, then push the biscuit gravestones into the cake and arrange the ghosts around.",
            "To get the ghosts to ‘fly’, push a thin wire into the bottom of the ghost, then place in the cake, hiding the wire behind a gravestone."
          ]
        ] ]
      },




      {
        titulo: 'Pumpkin & caramel cake',
        descricao: "This cake uses a few shortcuts but the final result is a deliciously impressive dulce de leche and pumpkin spice-filled sponge",
        cookingTime: 'Prep: 45 mins / Cook: 30',
        serves: 'Serves 10-12',
        font: ['https://www.bbcgoodfood.com/recipes/pumpkin-caramel-cake'],
        ingredientes:[
          [
            "For the cake",
            "80ml vegetable oil, plus extra for greasing",
            "450g pack vanilla or white cake mix (or make your own cake mix, see tip below)",
            "½ x 425g can pumpkin purée",
            "125ml full-fat milk",
            "4 large eggs",
            "1 tsp pumpkin pie spice (available from uk.iherb.com, or mix it yourself by combining 1/2 tsp ground cinnamon, 1/4 tsp ground ginger, 1/4 tsp nutmeg and a pinch of ground cloves)"
          ],
          [
            "For the spread",
            "4 tbsp dulce de leche from a jar"
          ],
          [
            "For the filling",
            "225g full-fat cream cheese",
            "125g icing sugar, sifted",
            "1 tsp pumpkin pie spice",
            "½ x 425g can pumpkin purée",
            "440ml double cream"
          ],
          [
            "To decorate",
            "70g pecans, toasted and roughly chopped"
          ]
        ],
        categoriaId: 4,
        imageLink: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pumpkin-caramel-cake-0fafc3c.jpg?quality=90&webp=true&resize=375,341',
        instructions:[
          [
            "Heat oven to 180C/160C fan/gas 4.",
            "Grease and line the bases of two 23cm cake tins.",
            "In a big bowl, beat the oil, cake mix, pumpkin purée, milk, eggs and spice mixture until smooth.",
            "Pour the mixture into the cake tins and bake for 22-25 mins until a skewer inserted into the centre comes out clean.",
            "Cool in the tins while you make the filling."
          ],
          [
            "Beat the cream cheese briefly in a medium bowl until fluffy, then add the icing sugar, spice and pumpkin purée and beat until smooth.",
            "Be careful not to overbeat or it will go runny.",
            "In another bowl, whip the cream and fold it gently into the cream cheese mixture."
          ],
          [
            "When the cakes are cool, cut each one in half horizontally so you have four thin sponges.",
            "Put the bottom layer on a plate, spread with 1 tbsp dulce de leche, then smooth over a quarter of the filling.",
            "Add the next layer and repeat until you have an amazing tower of pumpkin, cake, caramel and cream, then sprinkle the pecans on top."
          ]
        ]
      },



      
      
      
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
