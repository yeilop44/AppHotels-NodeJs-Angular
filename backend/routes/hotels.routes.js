const express = require('express');
const router = express.Router();
const hotels = require('../data.json');

router.get('/', (req, res) => {
   res.send(hotels);
});

router.get('/name/:name', (req, res) => {
   let hotel = hotels.find(h => h.name == (req.params.name));
   console.log(hotel);
   res.send(hotel);

});

router.get('/stars/:stars', (req, res) => {
   var nombre =[];
   for(let i=0; i<hotels.length; i++) {
   	let id = hotels[i].stars;
   		if(id == req.params.stars) {
			nombre.push(hotels[i]);
   		} 
   }
   res.send(nombre);
});

module.exports = router;

	