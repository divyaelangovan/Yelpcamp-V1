var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");

var campgrounds = [
	{name : "Salman Creek", image : "https://image.shutterstock.com/image-photo/idyllic-view-wooden-pier-lake-260nw-647990143.jpg"},
	{name : "Granite Hills", image :"https://image.shutterstock.com/image-photo/bamboo-pedestrian-hanging-bridge-over-260nw-536177866.jpg"},
	{name : "Mountain Goat", image :"https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg"},
	{name : "Salman Creek", image : "https://image.shutterstock.com/image-photo/idyllic-view-wooden-pier-lake-260nw-647990143.jpg"},
	{name : "Granite Hills", image :"https://image.shutterstock.com/image-photo/bamboo-pedestrian-hanging-bridge-over-260nw-536177866.jpg"},
	{name : "Mountain Goat", image : "https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg"},
	{name : "Salman Creek", image : "https://image.shutterstock.com/image-photo/idyllic-view-wooden-pier-lake-260nw-647990143.jpg"},
	{name : "Granite Hills", image :"https://image.shutterstock.com/image-photo/bamboo-pedestrian-hanging-bridge-over-260nw-536177866.jpg"},
	{name : "Mountain Goat", image :"https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg"},
	]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	
res.render("campgrounds", {campgrounds : campgrounds});

});

app.post("/campgrounds", function(req, res){
//get data from form and add to campgrounds array
var name = req.body.name;
var image = req.body.image;
//to push data to campground, creating object
var newCampground = {name : name, image: image}
campgrounds.push(newCampground);
//redirect back to campgrounds page
res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("Yelpcamp started");
});