var express = require('express');
var router = express.Router();
var newsContent = require('../models/news_content.js')

module.exports = function(app){        
    app.get('/',function(req,res){        
        res.render('index', { title: '主页' });    
    });    
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
    app.get('/news' , function(req,res){
        res.render('news' , {title: "新闻" ,news_contents:[new newsContent('http://www.baidu.com',"百度一下")]});
    }); 
};

