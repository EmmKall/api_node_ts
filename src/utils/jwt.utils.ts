import { Response } from "express";
import { User } from "../interface/user.interface";
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import UserModel from "../models/user.module";
const JWT_SECRET: string = process.env.JWT_SECRET || '';

const generateJWT = async ( user: User ) =>
{
    const payload = {
        id:    user._id,
        name:  `${user.name} ${user.last_name}`,
        email: user.email,
    };
    const jwt = sign( payload, JWT_SECRET, { expiresIn: "8h" } );
    console.log( jwt.length );
    return jwt;
}

const verifyJWT = async( token: string ): Promise<User | null> =>
{
    try {
        const paypload: any = await verify( token, JWT_SECRET );
        if( !paypload ){ return null; }
        const { id }  = paypload;
        const user    = await UserModel.findOne( { _id: id } );
        if( !user || token !== user.token ){ return null; }
        return user;
    } catch (error) {
        return null;
    }
}

export
{
    generateJWT,
    verifyJWT,
}

