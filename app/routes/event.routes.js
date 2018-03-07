module.exports = function(app) {

    var event = require('../controllers/event.controller.js');

    // Create a new event
    app.post('/event', event.create);

    // Retrieve all events
    app.get('/event', event.findAll);

    // Retrieve a single event with eventId
    app.get('/event/:eventId', event.findOne);

    // Update a event with eventId
    app.put('/event/:eventId', event.update);

    // Delete a event with eventId
    app.delete('/event/:eventId', event.delete);
}