var mongoose = require('mongoose');

var HealthSchema = mongoose.Schema({
    price: String,
    description: String
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Health', HealthSchema);