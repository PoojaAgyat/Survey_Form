const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [5, 'name should be 5 character long'],
        },
        email: {
            type: String,
            required: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email',
            ],
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [8, 'password should contain atleast 8 characters']
        },
        profession: {
            type: String,
        },
        token: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
)

const User = mongoose.model("user", UserSchema)

module.exports = User