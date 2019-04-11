const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
// const db = require ("./models");
var PORT = 3000;
// Configure middleware

const app = express();
// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the
//  Mongo DB
// mongoose.connect("mongodb://localhost/unit18Populater", {
//   useNewUrlParser: true
// });

// Routes

axios.get("https://www.nytimes.com/").then(response => {
  const $ = cheerio.load(response.data);
  // console.log(response.data);
  
 
  $("css-1w0yruz esl82me0 h2").each(function(i, element) {
    // Save an empty result object
    var result = {};

    // Add the text and href of every link, and save them as properties of the result object
    result.title = $(this)
      .children("a")
      .text();
    result.link = $(this)
      .children("a")
      .attr("href");
        console.log(result);
    // Create a new Article using the `result` object built from scraping
    // db.Article.create(result)
    //   .then(function(dbArticle) {
    //     // View the added result in the console
    //     console.log(dbArticle);
    //   })
    //   .catch(function(err) {
    //     // If an error occurred, log it
    //     console.log(err);
    //   });
  });

  // Send a message to the client
  //response.send("Scrape Complete");
});
