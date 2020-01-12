
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burgers.findAll({
      where:{
        devoured: false
      }
    }).then(function(results){
      res.json(results);
    })
  });

  // Get route for retrieving a single post
  
  app.get("/api/eaten/", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json

    db.Burgers.findAll({
      where:{
        devoured: true
      }
    }).then(function(results){
      res.json(results);
    })
  });

  app.post("/api/eaten", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: true
    }).then(function(results){
      res.json(results);
      res.end();
    })
  });

  // POST route for adding new burgers
  app.post("/api/burgers/", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(results){
      res.json(results);
      res.end();
    })
  });

   // PUT route for eaten burgers
   app.put("/api/burgers/:id",  function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log(req.body);
    db.Burgers.update({
      devoured: true
    },{
      where: {
        id: req.params.id
      }
    }).then(function(results){
      console.log(results);
      res.json(results);
      res.end();
    })
  });

  // DELETE route for deleting devoured burgers
  app.delete("/api/burgers/:id", function(req, res) {

    db.Burgers.destroy({
      where:
      {
        id: req.params.id
      }
    }).then(function(results){
      res.json(results);
      res.end();
    })
  });

  // PUT route for updating posts
  // app.put("/api/burgers", function(req, res) {
  //   // Add code here to update a post using the values in req.body, where the id is equal to
  //   // req.body.id and return the result to the user using res.json
  //   db.Burgers.update({
  //     devoured: true
  //   },{
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(results){
  //     console.log(results);
  //     res.json(results);
  //   })
  // });
};
