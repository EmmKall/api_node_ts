import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user.module";
import { encrypt, verifyHash } from "../utils/hash.utils";
import { generateJWT } from "../utils/jwt.utils";
import { generateText } from "../utils/generateText.utils";

const loginS = async ( body: Auth ) =>
{
    const user: User | null = await UserModel.findOne( { email: body.email } );
    if( !user ){
        const data = {
            login: false,
            msg: 'Data invalid',
        };
        return data;
    }

    const isValid: boolean = await verifyHash( body.password, user.password );
    if( isValid ){
        user.token    = await generateJWT( user );
        await UserModel.findOneAndUpdate( { _id: user._id }, user, { new: true } );
        //Hide password
        user.password = '';
        const data = {
            login: true,
            msg: 'Login success',
            user
        };
        return data;
    } else {
        const data = {
            login: false,
            msg: 'Data invalid',
        };
        return data;
    }
}

const registerS = async ( user: User ) =>
{
    //Valid if exists
    const row = await UserModel.findOne( { email: user.email } );
    if( row ){
        const data = { msg: 'Email already registered' };
        return data;
    }
    //Create user
    user.password = await encrypt( user.password );
    user.token    = generateText( 12 );
    const data    = await UserModel.create( user );
    return data;
}

const logoutS = async () =>
{
    return { msg: 'logout' };
}

const confirmEmailS = async () =>
{
    return { msg: 'confirm email' };
}

export {
    loginS,
    registerS,
    logoutS,
    confirmEmailS,
};
