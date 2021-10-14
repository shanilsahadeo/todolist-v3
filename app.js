const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

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
    name: "Test item 1"
})

const item2 = new ItemModel({
    name: "Test item 2"
})

const item3 = new ItemModel({
    name: "Test item 3"
})

const defaultItems = [item1, item2, item3];



app.get("/", function(req, res){
    let currentDate = new Date();
    let options = { weekday: "long", month: "long", day: "numeric" };
    let formattedDate = currentDate.toLocaleDateString("en-NZ", options)

    ItemModel.find({}, function(err, foundItems){
        if (foundItems.length === 0) {
            ItemModel.insertMany(defaultItems, function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully added items to database.");
                }
            })
            res.redirect("/");
        } else {
            res.render("list", {ejsDayDateMonth: formattedDate, ejsItemsList: foundItems});
        }        
    })
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    ItemModel.create({name: item}, function(err){
        if (err){
            console.log(err)
        } else {
            console.log("Added [" + item + "] successfully");
        }
    })

    res.redirect("/");
})


app.listen(3131, function(){
    console.log(">>>Server running on port 3131");
});