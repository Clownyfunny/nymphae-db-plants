var FlowerPower = require('./node-flower-power');
var _           = require('underscore');
var request     = require('request');

var auth = {
  username: 'projectnymphae@gmail.com',
  password: 'lpdw2014',
  client_id: 'projectnymphae@gmail.com',
  client_secret: 'kJfZ3xyyIRnxbqkUzVuQ3ENDoULeN4ycTLLPrecP5KtBJUgi',
};

var api = new FlowerPower(auth, function(err, data) {
  if (err) {
    console.log('Login error:', err);
  } else {
    console.log('Logged in.');
  }
});

// Method #1
api.getPlants(function(err, plants_ids) {
    var plants = [];
    _.each(plants_ids.found, function(plant_id){
        api.getFlower(plant_id, function(err, plant){
          request.post('http://localhost:3000/api/plants').form(plant);
        });
    });
})
