var Health = require('../models/health.model.js');

exports.create = function(req, res) {
    
    var health = new Health({price: req.body.price , description:req.body.description || "no description"});

    health.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the health."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all healths from the database.

    Health.find(function(err, health){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving health details."});
        } else {
            res.send(health);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single health with a healthId
    Health.findById(req.params.healthId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve health details with id " + req.params.healthId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a health identified by the healthId in the request

    Health.findById(req.params.healthId, function(err, health) {
        if(err) {
            res.status(500).send({message: "Could not find a health details with id " + req.params.healthId});
        }

        health.price = req.body.price;
        health.description = req.body.description;
        

        health.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update health details with id " + req.params.healthId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a health with the specified healthId in the request
    Health.remove({_id: req.params.healthId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete health details with id " + req.params.healthId});
        } else {
            res.send({message: "health details deleted successfully!"})
        }
    });

};