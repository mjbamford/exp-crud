const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts_routes');

const port = 3000;
const app = express();

const dbConn = 'mongodb://localhost/blog_app';

mongoose.connect(dbConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connect to database!');
        }
    }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/posts', postRouter);

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
})
