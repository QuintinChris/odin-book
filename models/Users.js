var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100,
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    friends: [{
        type: Schema.Types.ObjectId,
    }],
    photo: {
        data: Buffer,
        contentType: String
    },
    cover: {
        data: Buffer,
        contentType: String
    },
    bio: {
        type: String,
    },
    occupation: {
        type: 
    },
    education: {},
    location: {},
    hometown: {},
    status: {
        type: 
    }
});

UserSchema.virtual('url').get(function () {
    return '/catalog/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);