const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {name: 'GOD!', email: 'god@example.com', password: '1234', phone: '2625016673'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', phone: '2625016673'},
  {name: 'aria', email: 'aria@gmail.com', password: '123', phone: '2625016673'},
  {name: 'pepper', email: 'pepper@gmail.com', password: '123', phone: '2625016673'},
  {name: 'sandro', email: 'sandro@example.com', password: '123', phone: '9085108119'}
], user => db.model('users').create(user));

const seedRecipes = () => db.Promise.map([
  {name: 'Pasta Night', meal: 'Dinner', lastMade: '2017-02-08 17:42:32.339-05', user_id: '5', photo: 'http://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-forkful.jpg'},
  {name: 'Stir fry', meal: 'Dinner', lastMade: '2016-12-08 17:42:32.339-05', user_id: '5', photo: 'http://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/05/Sweet-Chili-Chicken-Stir-Fry-GI-365-5.jpg'},
  {name: 'Chicken and Greens', meal: 'Dinner', lastMade: '2017-01-08 17:42:32.339-05', user_id: '1', photo: 'http://assets.bonappetit.com/photos/5824f3ac625561e71f4dc0f3/16:9/w_1000,c_limit/braised-chicken-thighs-with-squash-and-mustard-greens.jpg'},
  {name: 'Popcorn', meal: 'Snack', lastMade: '2016-03-03 17:42:32.339-05', user_id: '1', photo: 'http://lorempixel.com/400/400/food'}
  ], recipe => db.model('recipes').create(recipe));

const seedIngredients = () => db.Promise.map([
  {name: 'Noodles', isCheatDay: 'Yes'},
  {name: 'Apples', isCheatDay: 'No'},
  {name: 'Chicken', isCheatDay: 'No'},
  {name: 'Ice Cream', isCheatDay: 'Yes'}
], ingredient => db.model('ingredients').create(ingredient));

const seedRecipeLines = () => db.Promise.map([
  {amount: '1 box', recipe_id: '1', ingredient_id: '1'},
  {amount: '2 lbs', recipe_id: '2', ingredient_id: '3'},
  {amount: '1/2', recipe_id: '3', ingredient_id: '3'},
  {amount: '1 cup', recipe_id: '4', ingredient_id: '4'},
  {amount: '3 cup', recipe_id: '1', ingredient_id: '4'},
  {amount: '4 lbs', recipe_id: '1', ingredient_id: '2'},
  {amount: '3', recipe_id: '1', ingredient_id: '2'},
], line => db.model('recipelines').create(line));

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedRecipes)
  .then(recipes => console.log(`Seeded ${recipes.length} recipes OK`))
  .then(seedIngredients)
  .then(ingredients => console.log(`Seeded ${ingredients.length} ingredients OK`))
  .then(seedRecipeLines)
  .then(lines => console.log(`Seeded ${lines.length} recipeLines OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
