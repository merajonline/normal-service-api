var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    price: String,
    description: String
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);