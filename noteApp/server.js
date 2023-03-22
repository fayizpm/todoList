var express = require('express');
var app = express();
var http = require('http').createServer(app);
// var mysql = require('mysql2')

// db = mysql.createConnection({

//     host: 'localhost',
//     user: 'root',
//     password: 'faris786',
//     database: 'demo2'

// })
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let result = [];


app.get('/', (req, res) => {

    res.json(result)
    console.log(result);
})

app.post('/submit', (req, res) => {


    let _id = req.body._id;
    let tittle = req.body.tittle;
    let content = req.body.content;


    result.push({ _id, tittle, content })

    res.json(result)

})

app.get('/edit/:id', (req, res) => {

    let Id = req.params.id

    let Data = result.find(data => data._id === Id)
    res.json({ Data })
    console.log(Data);
    res.send('ndkjfnkn')


})
app.get('/update', (req, res) => {

    let id=req.params.id
    let newtittle=req.body.tittle
    let newcontent=req.body.content

     let data = result.find(data => data._id === id)

       data.push({id,newtittle,newcontent})
       
       res.json(result)
    

})
app.get('/delete/:Id', (req, res) => {

    let Id = req.params.Id


    let results = result.filter(data => data._id === Id)
    let index = result.indexOf(Id)

    if(index >-1){
        result.slice(index,1)
    }
    console.log(index);

})

// port
http.listen(3000, function () {
    console.log("running....3000");
})



