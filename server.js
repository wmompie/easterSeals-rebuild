const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Hello World, welcome.' }));

// Define Routes
app.use('/api/runners', require('./routes/runners'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
