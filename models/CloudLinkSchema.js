const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CloudLinkSchema = new Schema({
    domain_url:String,
    bucket:String,
    folder_name:String,
    file_name:String,
})

const Course = mongoose.model('cloudlink',CloudLinkSchema);
module.exports = CloudLinkSchema;