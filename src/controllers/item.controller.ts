import { Request, Response } from 'express';
import { indexS, findByIdS, storeS, updateS, destroyS } from '../services/items.service';
import { handleErrorHttp, handleSucessResponse } from "../utils/error.utils";
import { validDataInput } from '../utils/validation.utils';
import { TypeInput } from '../interface/typeInput.interface';
import { RequestExt } from '../interface/RequestExt.interface';

const KEYS: Array<TypeInput> = [
    { name: 'name', min: 5, required: true, type: 'string' },
    { name: 'description', min: 5, required: true, type: 'string' },
    { name: 'price', min: 0.1, required: true, type: 'number' }
];

const index = async ( req: RequestExt, res: Response ) => {
    try {
        const data = await indexS();
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const findById = async ( req: Request, res: Response ) => {
    try {
        const { id } = req.params; 
        const data = await findByIdS( id );
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const store = async ( req: Request, res: Response ) => {
    try {
        const { body : item } = req;
        const isValid = await validDataInput( res, KEYS, item );
        if( isValid ){
            const data = await storeS( item );
            handleSucessResponse( res, 201, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const update = async ( req: Request, res: Response ) => {
    try {
        const { body: item } = req;
        const { id } = req.params;
        const data = await updateS( item, id );
        const isValid = await validDataInput( res, KEYS, item );
        if( isValid ){
            const data = await storeS( item );
            handleSucessResponse( res, 200, 'Request success', data );
        }
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const destroy = async ( req: Request, res: Response ) => {
    try {
        const { id } = req.params;
        await destroyS( id );
        handleSucessResponse( res, 200, 'Request success', [] );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

export {
    index,
    findById,
    store,
    update,
    destroy
};
