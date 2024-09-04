import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interface/user.interface';
import validator from 'validator';

const UserSchema = new Schema<User>(

    {
        name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: ( value: string ) => {
                return validator.isEmail( value );
              }
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email_verified: {
            type: Boolean,
            default: false,
        },
        token: {
            type: String,
            default: '',
            minlength: 240,
            maxlength: 250,
        },
        rol: {
            type: Number,
            default: 1,
        },
        profile: {
            type: String,
            default: '',
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },

);

const UserModel = model( 'users', UserSchema );

export default UserModel;
