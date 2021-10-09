const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//item list array - to be replaced with database
const itemsList = ["item 1", "item 2", "item 3"];

//connect to database
mongoose.connect("mongodb://localhost:27017/todoDB", {useNewUrlParser: true});

//define schema
const itemsSchema = new mongoose.Schema({
    name: String
})

//create model
const ItemModel = mongoose.model("Item", itemsSchema);

//create instance of item
const item1 = new ItemModel({
    name: "Test item created from code"
})

itemsList.push(item1.name);
// console.log(itemsList[0]);
// console.log(itemsList[1]);
// console.log(itemsList[2]);
// console.log(item1.name);
//save the new model
ItemModel.insertMany([itemsList], function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully added items to database.");
    }
})

app.get("/", function(req, res){
    let currentDate = new Date();
    let options = { weekday: "long", month: "long", day: "numeric" };
    let formattedDate = currentDate.toLocaleDateString("en-NZ", options)
 

    res.render("list", {ejsDayDateMonth: formattedDate, ejsItemsList: itemsList});
});

app.post("/", function(req, res){
    var item = req.body.newItem;

    itemsList.push(item);
    res.redirect("/");
})


app.listen(3000, function(){
    console.log(">>>Server running on port 3000");
});