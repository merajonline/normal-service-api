var Beauty = require('../models/beauty.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    /*if(!req.body.content) {
        res.status(400).send({message: "beauty details can not be empty!"});
    }*/
    var beauty = new Beauty({price: req.body.price , description:req.body.description || "no description"});

    beauty.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the beauty."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.

    Beauty.find(function(err, beauty){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving beauty details."});
        } else {
            res.send(beauty);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Beauty.findById(req.params.beautyId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve beauty details with id " + req.params.beautyId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request

    Beauty.findById(req.params.beautyId, function(err, beauty) {
        if(err) {
            res.status(500).send({message: "Could not find a beauty details with id " + req.params.beautyId});
        }

        beauty.price = req.body.price;
        beauty.description = req.body.description;
        

        beauty.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update beauty details with id " + req.params.beautyId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a beauty with the specified beautyId in the request
    Beauty.remove({_id: req.params.beautyId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete beauty details with id " + req.params.beautyId});
        } else {
            res.send({message: "beauty details deleted successfully!"})
        }
    });

};