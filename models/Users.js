var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    friends: {},
    brand: {},
    photo: {},
    cover: {},
    bio: {},
    occupation: {},
    education: {},
    location: {},
    hometown: {},
    status: {}
});

UserSchema.virtual('url').get(function () {
    return '/catalog/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);