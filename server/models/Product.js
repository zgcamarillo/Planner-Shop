//Models folder- where I define what my data looks like and how my app talks to the database; seperation on concern, consistency and safetym scalability, reusability - INDUSTRY STANDARD 

const mongoose = require("mongoose"); // importing mongoose

const productSchema = new mongoose.Schema({ //defining schema- creating a blueprint 
    title: String,
    description: String, 
    price: Number,
    image: String,
    type: [String]
});

module.exports = mongoose.model("Product", productSchema); //creating a model called Product based on this, exporting so other files can use it- mongoose will aalso create a collection named Producted 