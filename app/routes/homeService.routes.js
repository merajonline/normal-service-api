module.exports = function(app) {

    var homeService = require('../controllers/homeService.controller.js');

    // Create a new homeService
    app.post('/homeService', homeService.create);

    // Retrieve all homeService
    app.get('/homeService', homeService.findAll);

    // Retrieve a single Note with noteId
    app.get('/homeService/:homeServiceId', homeService.findOne);

    // Update a homeService with homeServiceId
    app.put('/homeService/:homeServiceId', homeService.update);

    // Delete a homeService with homeServiceId
    app.delete('/homeService/:homeServiceId', homeService.delete);
}