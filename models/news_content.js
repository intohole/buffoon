//引用mongoose库
var mongoose = require("mongoose");

//定义schema 类似mysql里面的表
var NewsModelSchema = mongoose.Schema({
    url : String ,
    content :String ,
    title : String ,
    author : String ,
    website : String ,
    summary : String 
});

//model("news" -> mongodb collections 
var newsModel = mongoose.model("news", NewsModelSchema);
//输出module
module.exports = newsModel
