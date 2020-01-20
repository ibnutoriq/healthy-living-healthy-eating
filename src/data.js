export const recipeOptions = [
  {
    label: 'Tal’s Tahini “bread pudding”',
    value: 'tahini-bread-pudding',
    description: 'A delicious baked dessert that takes 5 minutes to make!',
    tag: ['Dessert'],
    image: 'http://forkgasm.com/images/bread-pudding.png',
    ingredient: [
      {
        amount: '0.5',
        unit: 'cup',
        label: 'tahini'
      },
      {
        amount: '4',
        label: 'eggs'
      },
      {
        amount: '1',
        unit: 'tsp',
        label: 'baking powder'
      },
      {
        amount: '30',
        unit: 'g',
        label: 'honey'
      },
      {
        amount: '3',
        unit: 'tbsp',
        label: 'Sukrin Gold or brown sugar'
      },
      {
        amount: '1',
        unit: 'tsp',
        label: 'maple extract'
      },
      {
        label: 'cinammon',
        amount: '1',
        unit: 'tsp'
      },
      {
        label: 'sesame seeds for garnish'
      }
    ],
    ingredientGroup: [
      {
        ingredient: []
      }
    ],
    step: [
      {
        description: 'Beat all ingredients together really well in a blender.'
      },
      {
        description:
          'Pour mixture in an oiled cake tray (we suggest sesame oil for the oiling) and sprinkle with sesame seeds.'
      },
      {
        description:
          'Bake for 25-30 minutes at 345F (convection bake is better). Depending on your oven, you may want to turn it around (horizontally) after 15 minutes to ensure even baking.'
      },
      {
        description:
          'Done, enjoy! We actually eat it with a spoon straight from the cake tray!'
      }
    ],
    notes:
      "- If you are not avoiding carbs, you can substitute the maple extract with maple syrup.\n- Add two bananas and a good handful of walnuts to the mix and you have banana walnut bread!\n- Other ingredients we've tried (not all at once!): cardamom, Grand Marnier, vanilla extract. Feel free to experiment!",
    forked: 'My friend Tal\'s "tahini bread" recipe.'
  },
  {
    label: 'Grand Marnier & Coffee Ice Cream',
    value: 'grand-marnier-coffee-ice-cream',
    description: 'Easy and decadent!',
    tag: ['Dessert', 'Ice Cream'],
    ingredient: [
      {
        amount: '4',
        unit: 'cups',
        label: 'heavy cream'
      },
      {
        amount: '1',
        unit: 'cup',
        label: 'icing sugar or substitite'
      },
      {
        amount: '4',
        label: 'egg yolks'
      },
      {
        amount: '0.25',
        unit: 'cup',
        label: 'Grand Marnier'
      },
      {
        amount: '1',
        unit: 'shot',
        label: 'espresso'
      },
      {
        amount: '1',
        unit: 'tbsp',
        label: 'vanilla extract'
      },
      {
        label: 'Cocoa nibs for garnish',
        preparation: '(Optional)'
      }
    ],
    ingredientGroup: [
      {
        ingredient: []
      }
    ],
    step: [
      {
        description:
          'Beat the heavy cream with half of the icing sugar substitute (added slowly) until starting to get thick'
      },
      {
        description:
          'Beat the egg yolks with the remaining half of the icing sugar substitute.'
      },
      {
        description:
          'Whisk the Grand Marnier, coffee, vanilla extract into the egg yolk mixture.'
      },
      {
        description: 'Whisk the egg yolk mixture into the heavy cream mixture'
      },
      {
        description:
          "Done! Add to your ice cream machine per manufacturer's instructions or freeze and stir every 30 minutes or so."
      }
    ],
    notes:
      "- We use (and love) [Sukrin Icing/Melis](https://www.amazon.com/Sukrin-Icing-Melis-Powdered-Substitute/dp/B00U7FCNG2/?tag=leaverou-20) for a healthy icing sugar substitute, it tastes exactly like the real thing and doesn't contain any artificial sweeteners, so it's keto-friendly (it's stevia & erythritol).\n- You can use 2 tbsp instant coffee if you don't have espresso, which is what the original recipe this one is forked from uses!\n- This will produce a delicate Grand Marnier flavor and the coffee will be fairly prominent. Adjust quantities accordingly if you want a stronger Grand Marnier flavor or less of a coffee flavor\n- If you're uncomfortable with raw eggs, you can buy pasteurized eggs or pasteurize them yourself by immersing the eggs in a 57.2C (135F) water bath for 75 minutes using a sous-vide (which is what we did).\n- Note that the amount of mixture this produces may be too much for your ice cream machine. We use a [Cuisinart ICE-21R](https://www.amazon.com/gp/product/B0041A3KPC/?tag=leaverou-20) and we had to do it in 2 batches. But the mixture lasts well in the fridge, we did the second batch 3 days later and it was fine!",
    forked:
      '[Coffee Grand Marnier Ice Cream](http://www.ronniefein.com/blog/coffee-grand-marnier-ice-cream)',
    image: 'https://forkgasm.com/images/grand-marnier-ice-cream.jpg'
  },
  {
    image: 'http://forkgasm.com/images/carbonara.jpg',
    label: 'Turnip Noodle Carbonara',
    value: 'turnip-carbonara',
    description:
      'A healthier version of the classic dish that tastes just as good!',
    tag: ['Bacon'],
    ingredient: [
      {
        amount: '16',
        unit: 'oz',
        label: 'turnip noodles'
      },
      {
        amount: '6',
        label: 'rashers bacon'
      },
      {
        amount: '6',
        label: 'eggs'
      },
      {
        amount: '0.5',
        unit: 'cup',
        label: 'parmesan',
        preparation: 'grated'
      },
      {
        amount: '4',
        label: 'cloves garlic',
        preparation: 'chopped, optional'
      },
      {
        amount: '0.25',
        unit: 'cup',
        label: 'heavy cream'
      },
      {
        label: 'Salt'
      },
      {
        label: 'Pepper',
        preparation: 'freshly ground'
      }
    ],
    ingredientGroup: [],
    step: [
      {
        description:
          "Cut the bacon into lardons and sauté until it's lightly cooked."
      },
      {
        description:
          'While the bacon is cooking, separate the yolks from 4 of the eggs. Whisk the 4 yolks, 2 whole eggs, the grated parmesan, the cream, and salt and pepper.'
      },
      {
        description:
          'If using garlic, add it once the bacon is starting to get cooked and saute for a few more minutes until fragrant'
      },
      {
        description:
          'Stir in turnip noodles until they are cooked through to desired doneness'
      },
      {
        description:
          'Turn the heat down to very low and stir in the egg mixture. Stir rapidly until it cooks, remove from heat.'
      },
      {
        description: 'Top with a little more ground pepper and serve!'
      }
    ],
    notes:
      'Turnip noodles are far closer to spaghetti than zucchini noodles that lose their shape. You can get them pre-spiralized from Whole Foods, or make them yourself with a spiralizer. Summer squash or butternut squash noodles are other options.\nLardons are matchstick-sized pieces of bacon. ',
    forked:
      '[Zucchini Noodle Carbonara Recipe](https://skinnyms.com/zucchini-noodle-carbonara-recipe/)'
  },
  {
    image:
      'http://forkgasm.com/images/40813912_2213541505597183_7740637805202109577_n.jpg',
    label: 'Spiced lamb chops with mint-mango sauce',
    value: 'spiced-lamb-chops-with-mint-mango-sauce',
    description: 'Delicious, refreshing, and super quick to make!',
    tag: ['Lamb'],
    ingredient: [
      {
        amount: '8',
        label: 'lamb chops'
      },
      {
        amount: '0.25',
        unit: 'cup',
        label: 'olive oil'
      },
      {
        amount: '4',
        label: 'garlic cloves'
      }
    ],
    ingredientGroup: [
      {
        label: 'Mint-Mango Sauce',
        ingredient: [
          {
            amount: '1',
            label: 'medium ripe mango'
          },
          {
            amount: '1',
            unit: 'cup',
            label: 'fresh mint'
          },
          {
            amount: '2',
            label: 'green onions'
          },
          {
            amount: '1',
            unit: 'tbsp',
            label: 'fresh lime juice'
          },
          {
            amount: '1',
            label: 'serrano chile',
            preparation: 'halved and seeded'
          },
          {
            amount: '0.5',
            label: 'ripe avocado'
          }
        ]
      },
      {
        label: 'Spice mix',
        ingredient: [
          {
            amount: '1',
            unit: 'tbsp',
            label: 'cumin',
            preparation: 'ground'
          },
          {
            amount: '2',
            unit: 'tsp',
            label: 'ground coriander'
          },
          {
            amount: '2',
            unit: 'tsp',
            label: 'ground cinammon'
          },
          {
            amount: '0.5',
            unit: 'tsp',
            label: 'turmeric'
          },
          {
            amount: '0.25',
            unit: 'tsp',
            label: 'cayenne pepper'
          },
          {
            amount: '0.25',
            unit: 'tsp',
            label: 'ground cardamom'
          },
          {
            amount: '0.125',
            unit: 'tsp',
            label: 'cloves',
            preparation: 'ground'
          },
          {
            amount: '0.5',
            unit: 'tbsp',
            label: 'coarse kosher salt'
          }
        ]
      }
    ],
    step: [
      {
        description:
          'In a blender or mini food processor, blend all the sauce ingredients, and chill in the fridge.'
      },
      {
        description: 'Blend the olive oil and garlic and coat the lamb chops.'
      },
      {
        description:
          'Make the spice mix, and coat the lamb chops well on both sides.'
      },
      {
        description:
          'Grill the lamb chops on a very hot cast iron grill pan (or a BBQ if you have one!) for 2-3 minutes on each side for medium rare.'
      },
      {
        description: 'Done! Serve with the sauce on the side.'
      }
    ],
    notes:
      "- If you’re out of green onions, you can substitute them in the sauce with 1 shallot\n- A good way to use the spice mix is to put it in an empty spice jar and use that to sprinkle it evenly on the lamb chops.\n- This spice mix is delicious and great on so many things! We've tried it on beef, duck, even carbonara! Might be a good idea to make more than is needed for this dish and keep it around.\n- If you have sauce leftovers, it keeps well in the fridge for days in an airtight container. It may darken a bit due to the avocado but it still tastes good.",
    forked:
      '[Spiced Lamb Chops with Mint-Mango Sauce](https://www.epicurious.com/recipes/food/views/spiced-lamb-chops-with-mint-mango-sauce-109587)'
  },
  {
    label: 'Papoutsakia',
    value: 'papoutsakia',
    description:
      'A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means "little shoes" and a portion usually has two. However, when cooking with large American eggplants, you\'ll likely find that one per portion is enough.',
    tag: ['Greek'],
    ingredient: [
      {
        amount: '3',
        label: 'eggplants'
      },
      {
        unit: 'extra virgin olive oil'
      },
      {
        label: 'thyme'
      },
      {
        label: 'salt, black pepper'
      }
    ],
    ingredientGroup: [
      {
        label: 'Mince',
        ingredient: [
          {
            amount: '2',
            unit: 'lbs',
            label: 'beef or lamb',
            preparation: 'minced'
          },
          {
            amount: '2',
            label: 'yellow onions',
            preparation: 'chopped'
          },
          {
            amount: '6',
            label: 'garlic cloves',
            preparation: 'chopped'
          },
          {
            amount: '500',
            unit: 'g',
            label: 'passata (Italian-style sieved tomato purée)'
          },
          {
            label: 'cinammon',
            preparation: 'ground'
          },
          {
            label: 'cloves',
            preparation: 'ground'
          },
          {
            label: 'allspice'
          },
          {
            amount: '4',
            unit: 'tsp',
            label: 'Better than Bouillon or other beef bouillon base'
          },
          {
            amount: '0.5',
            unit: 'cup',
            label: 'Metaxa or other cognac'
          },
          {
            amount: '2',
            unit: 'tbsp',
            label: 'Sukrin Gold or brown sugar'
          },
          {
            amount: '4',
            label: 'bay leaves'
          },
          {
            label: 'butter'
          },
          {
            label: 'black pepper'
          },
          {
            label: 'Worcestershire sauce'
          }
        ]
      },
      {
        label: 'Béchamel(ish)',
        ingredient: [
          {
            amount: '1',
            unit: 'cup',
            label: 'butter'
          },
          {
            amount: '0.5',
            unit: 'cup',
            label: 'coconut flour'
          },
          {
            label: 'heavy cream'
          },
          {
            amount: '4',
            label: 'egg yolks',
            preparation: 'beaten'
          },
          {
            amount: '250',
            unit: 'g',
            label: 'hard cheese (we used Gruyère)',
            preparation: 'grated'
          },
          {
            label: 'nutmeg',
            preparation: 'freshly ground'
          }
        ]
      }
    ],
    step: [
      {
        description:
          'Cut the eggplants in half and scoop out the center. Leave about 1-1.5cm of flesh. Carve the flesh crosswise.'
      },
      {
        description:
          'Season the eggplants well with olive oil, salt, pepper, thyme. Use your hands to make sure it goes everywhere. Be fast, because they absorb the oil very quickly!'
      },
      {
        description:
          'Put eggplants on a large baking tray, cut side down and bake at 200C (392F) for 30-40 minutes.'
      },
      {
        description:
          '**Mince**: \n1. Fry the onions in the butter on high heat.\n2. Once the onions have started to caramelize, add the garlic and fry for a few more minutes.\n3. Add the cinnamon, cloves, allspice, black pepper and give it a stir.\n4. Add the mince and bay leaves and reduce heat to medium.\n5. Once the meat has started to brown, pour in the Metaxa.\n6. Add the tomato pureé, Sukrin Gold, bouillon base, and Worcestershire sauce and stir well.\n5. Reduce heat and simmer for about half an hour or until the tomato tastes cooked and any liquids have been reduced.'
      },
      {
        description:
          '**Béchamel:**\n1. Melt the butter in a small pot over low heat\n2. Whisk in the coconut flour, stirring continuously to make a roux\n3. When the roux ingredients are nicely combined, whisk in the cream, adding a little each time to avoid lumps\n4. Cook it over low heat, stirring continuously\n5. When it has thickened, add nutmeg, salt, pepper to taste\n6. Take it off the heat and stir in the yolks and grated cheese'
      },
      {
        description:
          'Scoop the minced meat into the eggplants, and top it with the béchamel. Bake for 10 minutes at 200C (392F), checking frequently because ovens vary. You may want to turn on the grill (US: broiler) for the last 5 minutes to give the cheese a nice golden brown.'
      }
    ],
    forked:
      '[Παπουτσάκια με μπεσαμέλ](https://akispetretzikis.com/el/categories/kreas/melitzanes-papoytsakia-me-mpesamel),\nMaria’s moussaka recipe,\n[Low carb roux,  béchamel and souffle](http://www.fatisourfriend.com/roux-bechamel-and-souffle.html)',
    image:
      'http://forkgasm.com/images/6410429C-D04A-4624-9026-715C0A64A005.jpeg'
  },
  {
    image: 'http://forkgasm.com/images/gambas.png',
    label: 'Gambas al Ajillo',
    value: 'gambas-al-ajillo',
    description: 'Quick and garlicky!',
    tag: ['Seafood', 'Spanish'],
    ingredient: [
      {
        amount: '2',
        unit: 'lbs',
        label: 'shelled and deveined shrimp'
      },
      {
        amount: '1',
        unit: 'head',
        label: 'garlic',
        preparation: 'thinly sliced'
      },
      {
        amount: '1.25',
        unit: 'cup',
        label: 'extra-virgin olive oil'
      },
      {
        amount: '1',
        label: 'dried hot red chile',
        preparation: 'seeded and crumbled'
      },
      {
        amount: '2',
        unit: 'tbsp',
        label: 'dry sherry'
      },
      {
        amount: '1',
        unit: 'tsp',
        label: 'lemon zest'
      },
      {
        label: 'smoked paprika'
      },
      {
        label: 'salt'
      }
    ],
    step: [
      {
        description:
          'In a large bowl, toss the shrimp with 1 teaspoon of kosher salt and let stand for 10 minutes. '
      },
      {
        description:
          'Meanwhile, in a 9- to 10-inch enameled cast-iron skillet, combine the garlic and olive oil and cook over moderately low heat, stirring occasionally, until the garlic is very fragrant and just starts to brown, 8 to 10 minutes. '
      },
      {
        description:
          'Add the chile and smoked paprika and cook, stirring, until fragrant, 15 to 30 seconds. '
      },
      {
        description:
          'Add the shrimp to the skillet and cook over medium heat, stirring and turning the shrimp occasionally, until barely pink, about 5 minutes.'
      },
      {
        description:
          'Stir in the parsley, sherry, lemon zest and a generous pinch of salt. Remove from the heat and let stand until the shrimp are cooked through, 3 to 5 minutes. Serve in the skillet, passing crusty bread at the table.  '
      }
    ],
    forked:
      '[Gambas al Ajillo ](http://www.foodandwine.com/recipes/gambas-al-ajillo),\n[Sizzling Shrimp with Garlic (Gambas al Pil Pil)](https://www.williams-sonoma.com/recipe/sizzling-shrimp-with-garlic-gambas-al-pil-pil.html)'
  },
  {
    label: 'Shakshuka',
    value: 'shakshuka',
    description: 'Breakfast of champions (one of them)',
    tag: ['Arabic', 'Israeli', 'Breakfast'],
    ingredient: [
      {
        amount: '3',
        unit: 'tbsp',
        label: 'Olive oil'
      },
      {
        amount: '2',
        unit: 'medium',
        label: 'Yellow onions',
        preparation: 'chopped'
      },
      {
        amount: '1.5',
        unit: 'lb',
        label: 'Miced lamb or beef'
      },
      {
        amount: '1',
        unit: 'large',
        label: 'Organic green bell pepper',
        preparation: 'chopped'
      },
      {
        amount: '1',
        label: 'Jalapeño chilli',
        preparation: 'deseeded & chopped'
      },
      {
        amount: '1',
        unit: 'head',
        label: 'Garlic',
        preparation: 'minced'
      },
      {
        amount: '1',
        unit: '7 oz jar',
        label: 'Tomato concentrate'
      },
      {
        amount: '1',
        unit: '28 oz tin',
        label: 'Chopped peeled tomatoes'
      },
      {
        amount: '1',
        unit: 'cup',
        label: 'Red wine'
      },
      {
        amount: '4',
        label: 'Bay leaves'
      },
      {
        amount: '2',
        unit: 'tbsp',
        label: 'Erythritol'
      },
      {
        amount: '1',
        unit: 'tbsp',
        label: 'Beef stock concentrate'
      },
      {
        amount: '1',
        unit: 'tbsp',
        label: 'Smoked Paprika'
      },
      {
        amount: '1',
        unit: 'tbsp',
        label: 'Cumin seed',
        preparation: 'ground'
      },
      {
        amount: '1.5',
        unit: 'tsp',
        label: 'Black pepper',
        preparation: 'ground'
      },
      {
        amount: '1',
        unit: 'tsp',
        label: 'Caraway seed',
        preparation: 'ground'
      },
      {
        amount: '0.5',
        unit: 'bunch',
        label: 'Swiss chard or kale',
        preparation: 'destemmed'
      },
      {
        amount: '8',
        label: 'Freerange eggs'
      }
    ],
    step: [
      {
        description:
          'Heat oil in a large, deep, preferably ceramic, frying pan on medium heat'
      },
      {
        description: 'Cook onions until translucent, 5-10 min'
      },
      {
        description: 'Add minced meat, stir until lightly browned'
      },
      {
        description:
          'Reduce heat a little, add jalapeño and bell pepper, cook until slightly soft. 3-4 min, do not overcook'
      },
      {
        description:
          'Add garlic and tomato concentrate, stir for 2 min until tomato tastes cooked not raw'
      },
      {
        description:
          'Add the wine. Tip: pour the wine into the tomato paste jar and shake it to get the last of the paste out.'
      },
      {
        description:
          'Add canned tomatoes, cumin, caraway seeds, bay leaves, paprika, erythritol, concentrated stock, and pepper. Yes, that is a lot of cumin; it will be fine. Bring to low boil, reduce heat, simmer for 20 min'
      },
      {
        description:
          'Place de-stemmed Swiss chard leaves on top of cooked tomato mixture. Make 8 small depressions with a spoon'
      },
      {
        description:
          'Crack one egg into each depression. Cover (a transparent lid is ideal)'
      },
      {
        description:
          'Cook until egg white is _just_ set. Serve immediately, in the pan.'
      }
    ],
    notes:
      '- The tomato sauce keeps for a couple of days in the fridge. If eating over two days, crack only 4 eggs. Next time, reheat sauce then make 4 more depressions and crack the other 4.\n- We use Sukrin Gold erythritol, which looks and tastes like light brown sugar. If not low-carbing, demarara or other sugar can be substituted.\n- Bell peppers are bad for absorbing pesticides, so we always use organic because the skin is eaten.\n- The type of red wine is not critical, honestly. We use small (187ml) “individual” bottles of fairly cheap red wine.',
    forked:
      '[Israeli Breakfast Of Champions: Shakshuka](http://www.foodrepublic.com/recipes/israeli-breakfast-of-champions-shakshuka/)',
    image: 'http://forkgasm.com/images/shakshuka.jpg'
  }
];
