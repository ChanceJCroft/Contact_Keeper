const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect DB
connectDB();


//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the ContactKeeper API...' });
})


app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));