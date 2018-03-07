var mongoose = require('mongoose');

var HomeServiceSchema = mongoose.Schema({
    price: String,
    description: String
   
}, {
    timestamps: true
});

module.exports = mongoose.model('HomeService', HomeServiceSchema);