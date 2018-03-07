var HomeService = require('../models/homeService.model.js');

exports.create = function(req, res) {
    
    var homeService = new HomeService({price: req.body.price , description:req.body.description || "no description"});

    homeService.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the homeService."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all homeServices from the database.

    HomeService.find(function(err, homeService){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving homeService details."});
        } else {
            res.send(homeService);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single homeService with a homeServiceId
    HomeService.findById(req.params.homeServiceId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve homeService details with id " + req.params.homeServiceId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a homeService identified by the homeServiceId in the request

    HomeService.findById(req.params.homeServiceId, function(err, homeService) {
        if(err) {
            res.status(500).send({message: "Could not find a homeService details with id " + req.params.homeServiceId});
        }

        homeService.price = req.body.price;
        homeService.description = req.body.description;
        

        homeService.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update homeService details with id " + req.params.homeServiceId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a homeService with the specified homeServiceId in the request
    HomeService.remove({_id: req.params.homeServiceId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete homeService details with id " + req.params.homeServiceId});
        } else {
            res.send({message: "homeService details deleted successfully!"})
        }
    });

};