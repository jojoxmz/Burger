var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var allTableData = {
      burger: data
    };
    console.log(allTableData);
    res.render("index", allTableData);
  });
});

router.post("/api/burger", function(req, res) {

  burger.insertOne("burger_name", [req.body.burger_name], function(result) {
    console.log({ id: result.insertId });
    res.json({ id: result.insertId });
    // res.redirect("/"); Do this on the front end
	});
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.

// route to sanity check that a basic 'get' is working
// router.get("/", function(req, res) {
//   res.send("Hola, friends!");
// });
//
// // api route to show all burgers
// router.get("/api/burgers", function(req, res) {
// 	burger.selectAll(function(data) {
// 		res.json(data);
// 	});
// });
//
// // front end route to pass burgers into handlebars... only 1/4 wired up
// router.get("/burgers", function(req, res) {
// 	burger.selectAll(function(data) {
// 		res.render("index", { burgers: data });
// 	});
// });
//
// // post route (can be tested in postman)
// router.post("/api/burgers", function(req, res) {
// 	burger.insertOne("burger_name", [req.body.burger_name], function(result) {
// 		console.log(result);
// 		res.redirect("/");
// 	})
// });
module.exports = router;
