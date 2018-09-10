const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const cors = require('cors');

//	Settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'assets/images/hotels')))

//	Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/hotels', require('./routes/hotels.routes'));

// Starting the server
app.listen(app.get('port'), ()=>{
	console.log("server on port", app.get('port'));
}); 