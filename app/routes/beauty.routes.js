module.exports = function(app) {

    var beauty = require('../controllers/beauty.controller.js');

    // Create a new beauty
    app.post('beauty', beauty.create);

    // Retrieve all beautys
    app.get('beauty', beauty.findAll);

    // Retrieve a single beauty with beautyId
    app.get('/beauty/:beautyId', beauty.findOne);

    // Update a beauty with beautyId
    app.put('/beauty/:beautyId', beauty.update);

    // Delete a beauty with beautyId
    app.delete('/beauty/:beautyId', beauty.delete);
}