module.exports = function(app) {

    var repair = require('../controllers/repair.controller.js');

    // Create a new repair
    app.post('/repair', repair.create);

    // Retrieve all repair
    app.get('/repair', repair.findAll);

    // Retrieve a single repair with repairId
    app.get('/repair/:repairId', repair.findOne);

    // Update a repair with repairId
    app.put('/repair/:repairId', repair.update);

    // Delete a repair with repairId
    app.delete('/repair/:repairId', repair.delete);
}