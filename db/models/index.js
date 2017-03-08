'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Recipe = require('./recipe');
const RecipeLine = require('./recipelines');
const Ingredient = require('./ingredients');

OAuth.belongsTo(User);
User.hasOne(OAuth);

User.hasMany(Recipe); //adds user_id to recipe also user getRecipe and user setRecipe
Recipe.hasMany(RecipeLine); //adds recipe_id to RecipeLine && getRecipeLine setRecipeLine
Ingredient.hasMany(RecipeLine); //adds ingredient_id to RecipeLine also get and set ingredient

module.exports = {User, Recipe, RecipeLine, Ingredient};
