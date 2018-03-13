// Set up MySQL connection.
var mysql = require("mysql");

var connection;
const dbLink = "mysql://gjl87cosm5os4ulk:zihw14j9bv346iyh@e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mjmf24nj9y1vga7s";

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection(port: 3306,
    host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gjl87cosm5os4ulk",
    password: "zihw14j9bv346iyh",
    database: "mjmf24nj9y1vga7s");
}

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "Password@123",
//   database: "burger_db"
// });


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
