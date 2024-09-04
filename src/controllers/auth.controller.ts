import { Request, Response } from 'express';
import { loginS, registerS, logoutS, confirmEmailS } from '../services/auth.service';
import { handleErrorHttp, handleSucessResponse } from '../utils/error.utils';
import { TypeInput } from '../interface/typeInput.interface';
import { validDataInput } from '../utils/validation.utils';

const KEYS: Array<TypeInput> = [
    { name: 'name', min: 5, required: true, type: 'string' },
    { name: 'last_name', min: 4, required: true, type: 'string' },
    { name: 'email', min: 0.1, required: true, type: 'string' },
    { name: 'phone', min: 0.1, required: true, type: 'string' },
    { name: 'password', min: 0.1, required: true, type: 'string' },
];

const login = async ( req: Request, res: Response ) => {
    const KEYS = [
        { name: 'email', min: 5, required: true, type: 'string' },
        { name: 'password', min: 5, required: true, type: 'string' },
    ];
    try {
        const { body: user } = req;
        const isValid = await validDataInput( res, KEYS, user );
        if( isValid ){
            const data = await loginS( user );
            handleSucessResponse( res, 200, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const register = async ( req: Request, res: Response ) => {
    try {
        const { body: user } = req;
        const isValid = await validDataInput( res, KEYS, user );
        if( isValid ){
            const data = await registerS( user );
            handleSucessResponse( res, 200, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const logout = async ( req: Request, res: Response ) => {
    try {
        const { body: user } = req;
        const data = await logoutS( );
            handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const confirmEmail = async ( req: Request, res: Response ) => {
    const KEYS = [
        { name: 'token', min: 5, required: true, type: 'string' },
    ];
    try {
        const { body: user } = req;
        const isValid = await validDataInput( res, KEYS, user );
        if( isValid ){
            const data = await confirmEmailS(  );
            handleSucessResponse( res, 200, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

export {
    login,
    register,
    logout,
    confirmEmail,
};
