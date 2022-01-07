import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'El formato del correo electrónico No es valido.',
        }
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: "string",
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

export const userModel = model('User',userSchema)