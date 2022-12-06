const mongoose = require("mongoose");

var movieSchema = new Schema({
    name     : { type : String , required : true },
    url_m       : { type : String , unique : true, required : true },
    img_url     : { type : String, required: true},
    versionKey: false
});

module.exports = mongoose.model('movie', movieSchema);