const express = require('express');
const mysql = require('mysql2');
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "logs"
});


con.connect((err)=>{
    if (err) throw err;
    console.log("Connected")
    sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
})