var Event = require('../models/event.model.js');

exports.create = function(req, res) {
    
    var event = new Event({price: req.body.price , description:req.body.description || "no description"});

     event.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the event."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.

    Event.find(function(err, event){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving event details."});
        } else {
            res.send(event);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Event.findById(req.params.eventId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve event details with id " + req.params.eventId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request

    Event.findById(req.params.eventId, function(err, event) {
        if(err) {
            res.status(500).send({message: "Could not find a event details with id " + req.params.eventId});
        }

        event.price = req.body.price;
        event.description = req.body.description;
        

        event.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update event details with id " + req.params.eventId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a beauty with the specified beautyId in the request
    Event.remove({_id: req.params.eventId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete event details with id " + req.params.eventId});
        } else {
            res.send({message: "event details deleted successfully!"})
        }
    });

};