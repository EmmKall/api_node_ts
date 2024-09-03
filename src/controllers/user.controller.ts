import { Request, Response } from 'express';
import { indexS, findByIdS, storeS, updateS, destroyS } from '../services/users.service';
import { handleErrorHttp, handleSucessResponse } from '../utils/error.utils';
import { TypeInput } from '../interface/typeInput.interface';
import { validDataInput } from '../utils/validation.utils';

const KEYS: Array<TypeInput> = [
    { name: 'name', min: 5, required: true, type: 'string' },
    { name: 'last_name', min: 5, required: true, type: 'string' },
    { name: 'email', min: 0.1, required: true, type: 'string' },
    { name: 'phone', min: 0.1, required: true, type: 'string' },
    { name: 'password', min: 0.1, required: true, type: 'string' },
];

const index = async ( req: Request, res: Response ) => {
    try {
        const data = await indexS();
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const findById = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const data = await findByIdS( '' );
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const store = async ( req: Request, res: Response ) => {
    try {
        const { body: user } = req;
        const isValid = await validDataInput( res, KEYS, user );
        if( isValid ){
            const data = await storeS( user );
            handleSucessResponse( res, 201, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const update = async ( req: Request, res: Response ) => {
    try {
        const { body: user } = req;
        const { id }         = req.params;
        const isValid = await validDataInput( res, KEYS, user );
        if( isValid ){
            const data = await updateS( user, id );
            handleSucessResponse( res, 201, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const destroy = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const data = await destroyS( id );
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'Error to proccess', error );
    }
}


export {
    index,
    findById,
    store,
    update,
    destroy
};
