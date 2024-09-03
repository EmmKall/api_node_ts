import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interface/user.interface';

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
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const UserModel = model( 'users', UserSchema );
export default UserModel;
