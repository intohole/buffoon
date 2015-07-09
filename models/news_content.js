var mongoose = require('mongoose') ;
/*var schema = mongoose.Schema ;

var NewsContent = function(url, title, author, website, summary, content) {
    this.url = url;
    this.content = content;
    this.title = title ;
    this.author = author ;
    this.website = website ;
    this.summary = summary ;
};*/

var _NewsContent = new mongoose.Schema({
    url : String ,
    content :String ,
    title : String ,
    author : String ,
    website : String ,
    summary : String ,
});

module.exports.NewsContent= mongoose.model('NewsContent',_NewsContent) ;

