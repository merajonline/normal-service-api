var Repair = require('../models/repair.model.js');

exports.create = function(req, res) {
   
    var repair = new Repair({price: req.body.price , description:req.body.description || "no description"});

    repair.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the repair."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all repairs from the database.

    Repair.find(function(err, repair){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving repair details."});
        } else {
            res.send(repair);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single repair with a repairId
    Repair.findById(req.params.repairId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve repair details with id " + req.params.repairId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a repair identified by the repairId in the request

    Repair.findById(req.params.repairId, function(err, repair) {
        if(err) {
            res.status(500).send({message: "Could not find a repair details with id " + req.params.repairId});
        }

        repair.price = req.body.price;
        repair.description = req.body.description;
        

        repair.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update repair details with id " + req.params.repairId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a repair with the specified repairId in the request
    Repair.remove({_id: req.params.repairId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete repair details with id " + req.params.repairId});
        } else {
            res.send({message: "repair details deleted successfully!"})
        }
    });

};