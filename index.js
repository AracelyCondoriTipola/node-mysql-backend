//https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

var express = require("express");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
var tasks = []
var surrogatekey = 1;

// Codigo para la BASE DE DATOS.
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ABCabc123",
  port: 3355,
  database: "tasks"
});

app.get("/", (req, res, next) => {

    const sql = "SELECT * FROM Task"

    let resultQuery;

    // s conecta con la base de datos
    conn.connect(
        function(err) {
        if (err) 
        console.log("********** ERROR ********",err);
        throw err;
        console.log("Connected!");
        conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Result: " + result);
          res.json(result);
        });
      });


});

app.listen(3000, () => {
    console.log("Servidor HTTP funcionando");
});




