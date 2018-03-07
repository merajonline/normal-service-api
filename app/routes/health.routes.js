module.exports = function(app) {

    var health = require('../controllers/health.controller.js');

    // Create a new health
    app.post('/health', health.create);

    // Retrieve all health
    app.get('/health', health.findAll);

    // Retrieve a single health with healthId
    app.get('/health/:healthId', health.findOne);

    // Update a health with healthId
    app.put('/health/:healthId', health.update);

    // Delete a health with healthId
    app.delete('/health/:healthId', health.delete);
}