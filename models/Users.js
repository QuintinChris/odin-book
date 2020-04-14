var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    name: {
        type: String,
        required: true,
        max: 100,
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    sex: {
        type: String
    },
    // create function for this
    age: {
        type: Number
    },
    friends: [{
        type: Schema.Types.ObjectId
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
        type: String
    },
    occupation: {
        type: String
    },
    education: {
        type: String
    },
    location: {
        type: String
    },
    hometown: {
        type: String
    },
    isSingle: {
        type: Boolean
    }
});

UserSchema.virtual('url').get(function () {
    return '/catalog/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);