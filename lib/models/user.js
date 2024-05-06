const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            calorie: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        }
    ],
    days: [
        {
            name: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            meals: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    time: {
                        type: String,
                        required: true,
                    },
                    items: [
                        {
                            name: {
                                type: String,
                                required: true,
                            },
                            calorie: {
                                type: Number,
                                required: true,
                            },
                            image: {
                                type: String,
                                required: true,
                            },
                            quantity: {
                                type: Number,
                                required: true,
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)