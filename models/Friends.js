var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FriendSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user2: {
        type: Schema.Types.ObjectId,
        required: true
    },
}, {
    // for friend_birthday/ created_at
    timestaps: true,
});


FriendSchema.virtual('url').get(function () {
    return '/catalog/user/' + this._id;
});

module.exports = mongoose.model('Friend', FriendSchema);