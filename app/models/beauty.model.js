var mongoose = require('mongoose');

var BeautySchema = mongoose.Schema({
    price: String,
    description: String
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Beauty', BeautySchema);