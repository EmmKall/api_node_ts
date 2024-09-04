import { Request, Response } from 'express';

import { handleErrorHttp, handleSucessResponse } from '../utils/error.utils';
import { TypeInput } from '../interface/typeInput.interface';
import { validDataInput } from '../utils/validation.utils';
import { profileFileS } from '../services/profile.service';

const profileFile = async ( req: Request, res: Response ) => {
    try {
        const { body } = req;
        const data = await profileFileS( body );
        handleSucessResponse( res, 200, 'Request success', data );
    } catch (error) {
        handleErrorHttp( res, 'ERROR_TO_GET', error );
    }
}


export
{
    profileFile,
}