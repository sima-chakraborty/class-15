const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require("helmet");



const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());

app.use('/todos', require('./routes/todo'));
const port = process.env.PORT || 4800

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
}); 