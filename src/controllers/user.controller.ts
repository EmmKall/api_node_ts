import { Request, Response } from 'express';
import { indexS, findByIdS, storeS, updateS, destroyS } from '../services/users.service';
import { handleErrorHttp, handleSucessResponse } from '../utils/error.utils';

const index = async ( req: Request, res: Response ) => {
    try {
        const data = await indexS();
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}

const findById = async ( req: Request, res: Response ) => {
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
        const data = await storeS( user );
        handleSucessResponse( res, 201, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const update = async ( req: Request, res: Response ) => {
    try {
        const { body: user } = req;
        const data = await updateS( user, '' );
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_PROCESS', error );
    }
}

const destroy = async ( req: Request, res: Response ) => {
    try {
        const data = await destroyS( '' );
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
