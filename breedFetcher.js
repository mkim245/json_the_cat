const request = require('request');
// const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      // console.log(error);
      return callback(error, null);
      // return;
    }
    const data = JSON.parse(body);
    if (data.length > 0) {
      // console.log(data[0].description);
      return callback(null, data[0].description);
    } else {
      // console.log("breed is not found");
      return callback("breed is not found", null);
    }
  });
};

module.exports = { fetchBreedDescription };