const express = require('express');
const connectDB = require('./connect');
const URL = require('./models/url');
const app = express();
// const allUrls = require ('./routes/url');
const path = require('path');


const port = 6000;


app.use(express.json());

const urlRouter = require('./routes/url');

app.use('/', urlRouter);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/test", async(req, res) => {
    const allUrls = await URL.find ({});
    return res.render("home", {
        urls: allUrls,
    });
});

// const {} = require('./connect');

connectDB('mongodb://localhost:27017/urlShortener')
    .then(() => {
        console.log('Connected to MongoDB');
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})