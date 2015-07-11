var mongoose = require("mongoose");
var NewsModelSchema = mongoose.Schema({
    url : String ,
    content :String ,
    title : String ,
    author : String ,
    website : String ,
    summary : String 
});

var newsModel = mongoose.model("news", NewsModelSchema);

module.exports = newsModel
