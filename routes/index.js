var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var newsModule = require('../models/news_content.js')

//不需要在appjs使用链接mongodb,在哪里使用，在哪里链接
//链接方式：connect(uri , function(err){ do something}); 
mongoose.connect("mongodb://localhost/news", function (err) {
    if (!err) {
        console.log("connected to mongoDB");
    } else {
        throw err;
    }
});


module.exports = function(app){        
//    app.get('/',function(req,res){        
//        res.render('index', { title: '主页' });    
//    });    
    app.get('/reg',function(req,res){        
        res.render('index', { title: '注册' });    
    });    
    app.post('/reg',function(req,res){    
    });    
    app.get('/login',function(req,res){        
        res.render('index', { title: '登录' });   
    });    
    app.post('/login',function(req,res){
    });    
    app.get('/logout',function(req,res){
    });    
    app.get('/post',function(req,res){        
        res.render('index', { title: '发表' });    
    });    
    app.post('/post',function(req,res){    
    });
    app.get('/' , function(req,res){
        newsModule.find( {}, function(error , data){
            res.render('news' , {title: "新闻" ,news_contents:data});
        });
    }); 
};

