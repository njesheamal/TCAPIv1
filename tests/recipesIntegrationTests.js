require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';
const app = require('../app');

const Recipe = mongoose.model('Recipe');
const agent = request.agent(app);

describe('Recipe CRUD Test', () => {
  it('should allow a recipe to be posted and return _id', (done) => {
    const recipePost = {
      recipe_title: 'Awesome Tasting Dish', author: 'Njeshe Amal', food_type: 'breakfast', cuisine: 'American', main_ingredients: 'Eggs, Bacon, Flour, Sugar', url: 'https://falserecipeaddress.com', diet_restrictions: 'all a dem', nutritional_info: 'none a dem', occasion: 'integration testing', way_of_cooking: 'hot air', time: '60 seconds'
    };
    agent.post('/api/recipes')
      .send(recipePost)
      .expect(200)
      .end((error, results) => {
        // console.log(results);
        // results.body.recipe_title.should.not.equal('Awesome Tasting Dish');
        results.body.should.have.property('_id');
        done();
      });
  });
