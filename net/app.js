
var express = require('express');
var path = require('path');
var fs = require('fs');
const { render } = require('ejs');
const { table } = require('console');
const { createContext } = require('vm');

var customer = -1 ; 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req , res){
    res.render('login', {xxx: ""})
});
app.get('/dune',function(req , res){
    res.render('dune')
});
app.get('/fiction',function(req , res){
    res.render('fiction')
});
app.get('/flies',function(req , res){
    res.render('flies')
});
app.get('/grapes',function(req , res){
    res.render('grapes')
});
app.get('/home',function(req , res){
    res.render('home')
});
app.get('/leaves',function(req , res){
    res.render('leaves')
});
app.get('/mockingbird',function(req , res){
    res.render('mockingbird')
});
app.get('/novel',function(req , res){
    res.render('novel')
});
app.get('/poetry',function(req , res){
    res.render('poetry')
});

app.get('/searchresults',function(req , res){
    res.render('searchresults')
});
app.get('/sun',function(req , res){
    res.render('sun')
});
app.get('/registration',function(req , res){
    res.render('registration' , {xxx : ""})
});
app.post('/',function(req , res){
    res.render('home')
});

//var database = {
//    table: [] 
//};
//var toread = {
//    table: [] 
//};
//toread.table.push({name:"flies"});

//database.table.push({username : "" , password : "" , wanttoRead: toread});
//console.log(database.table[0].wanttoRead.table[0].name);

//var  stringdata = JSON.stringify(database);
//fs.writeFileSync('user.json' , stringdata );

//var c = fs.readFileSync('user.json');
//var z = JSON.parse(c);

//fs.appendFileSync('user.json', name:"helo")



app.post('/login' , function(req, res)
{
    var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
   var username = req.body.username ;
   var password = req.body.password ;
   var x = 0 ;
   for(var i = 0 ; i < z.table.length ; i++)
{
    if (username == z.table[i].username)
    {
        if (password == z.table[i].password)
        {
            x++;
            customer = i;
        }

        
    }
};

if (x==1)
{
    res.render('home');
}
else{
    res.render('login',{xxx: "user can not be found"});
}


});





app.post('/addgrapes' , function(req, res)
{

 var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "the grapes of wrath")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"the grapes of wrath"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}



  //  res.render('readlist',{tt: "grapes"});



}
)

app.post('/addleaves' , function(req, res)
{
   var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
   
var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "leaves of grass")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"leaves of grass"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}

    
    
}
)

app.post('/addsun' , function(req, res)
{
   

 var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "the sun and her flowers")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"the sun and her flowers"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}

     
}
)

app.post('/adddune' , function(req, res)
{
   

  var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
 var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "dune")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"dune"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}


    
}
)

app.post('/addflies' , function(req, res)
{
 
 var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
 var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "lord of the flies")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"lord of the flies"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}

    
}
)

app.post('/addmockingbird' , function(req, res)
{
 var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
var t = 0 ;
for(var i = 0 ; i<z.table[customer].wanttoRead.table.length; i++)
{
    if (z.table[customer].wanttoRead.table[i].name == "to kill a mockingbird")
    {
            t++;
    }
}
if (t==0)
{
z.table[customer].wanttoRead.table.push({name:"to kill a mockingbird"});
 stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

}

   
   
    
}
)



app.post('/register' , function(req , res)
{
     var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
var username = req.body.username;
var password = req.body.password;
var x = 0 
for(var i = 0 ; i < z.table.length ; i++)
{
    if (username == z.table[i].username)
    {
        console.log(x);
        console.log(i);
        x++;
        
    }
};


if (x != 1)
{

z.table.push({username :(req.body.username)  , password :(req.body.password) ,wanttoRead: {table:[] }});
  stringdata = JSON.stringify(z);
fs.writeFileSync('user.json' , stringdata );

 c = fs.readFileSync('user.json');
 z = JSON.parse(c);
customer = z.table.length - 1 ;

 res.render('home');

}
else{
    res.render('registration', {xxx: "user already registered"})
    
}

});



app.post('/search' , function(req , res)
{
    var result = []
    var name = ["lord of the flies" , "the grapes of wrath" , "leaves of grass" , "the sun and her flowers" , "to kill a mockingbird" , "dune" ]
    
    for(var i = 0 ; i<name.length ; i++)
    {
        if (name[i].includes(req.body.Search.toLowerCase()))
        {
                result.push(name[i]);
        }
    }
var title = [];
    for(var t = 0 ; t< result.length ; t++)
    {
        if (result[t] == "lord of the flies")
        {
                title.push("flies");
        }
         if (result[t] == "the grapes of wrath")
        {
                title.push("grapes");
        } 
         if (result[t] == "leaves of grass")
        {
                title.push("leaves");
        }
         if (result[t] == "the sun and her flowers")
        {
                title.push("sun");
        }
         if (result[t] == "to kill a mockingbird")
        {
            title.push("mockingbird");
        }
         if (result[t] == "dune")
        {
            title.push("dune");
        }
        
    }

     for(var t = 0 ; title.size<6 ; t++)
    {
title.push("");
    }
var outt = [];
for (var y = 0 ; y<6 ; y++ )
{
    if (title[y] == "flies")
    {
            outt.push("lord of the flies");
    }else
      if (title[y] == "grapes")
    {
          outt.push("the grapes of wrath");
    }else
      if (title[y] == "sun")
    {
          outt.push("the sun and her flowers");
    }else
      if (title[y] == "leaves")
    {
          outt.push("leaves of grass");
    }else
      if (title[y] == "dune")
    {
          outt.push("dune");
    } else
      if (title[y] == "mockingbird")
    {
          outt.push("to kill a mockingbird");
    }
    else{
          outt.push("");
    }

}


    res.render('searchresults', {title1:title[0]  , title2:title[1]  , title3:title[2]  , title4:title[3]  , title5:title[4]  , title6:title[5] , title10:outt[0] ,title20:outt[1],title30:outt[2],title40:outt[3],title50:outt[4],title60:outt[5] });


});






//// using want to read in website 






app.get('/readlist',function(req , res){
 var c = fs.readFileSync('user.json');
    var z = JSON.parse(c);
    var str = "";
for(var i = 0; i<z.table[customer].wanttoRead.table.length; i++)
{
str += z.table[customer].wanttoRead.table[i].name + '.....';
}



    res.render('readlist',{tt: str});
});


if(process.env.PORT){
app.listen(process.env.PORT, function() {console.log("server started")});
}else{
app.listen(3000, function() {console.log("server started on port 3000")});
}







