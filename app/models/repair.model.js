var mongoose = require('mongoose');

var RepairSchema = mongoose.Schema({
    price: String,
    description: String
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Repair', RepairSchema);