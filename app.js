var express= require("express")
var app= express()
app.get("/",function(req,res){
    res.render("home.ejs")
    
})


app.use('/assets',express.static('assets'))
var port=process.env.PORT || 3000;
app.listen(port);