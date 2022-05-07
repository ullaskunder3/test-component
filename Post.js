const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    content:{
        type: String,
        required: true
    },
    link: {
        type: String
    }
}, {timestamps: true})
module.exports = mongoose.model('Post', Post);