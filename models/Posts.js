var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: {
        required: true,
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comments: {
        type: String,
    },
    likes: {
        type: //????????
    }
});

PostSchema.virtual('url').get(function () {
    return '/catalog/posts/' + this._id;
});

module.exports = mongoose.model('Post', PostSchema);