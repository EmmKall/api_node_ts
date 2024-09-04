import { Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/jwt.utils';
import { User } from '../interface/user.interface';
import { RequestExt } from '../interface/RequestExt.interface';

const validSession = async ( req: RequestExt, res: Response, next: NextFunction ) => {
    try {
        const { authorization } = req.headers ?? null;
        if( authorization !== '' && !authorization?.includes( 'Bearer' ) ){
            const data = {
                status: 401,
                msg: 'Unauthorized'
            };
            res.status( 401 ).json( data )
            return;
        }
        const token: string   = authorization?.split( ' ' )[1] ?? '';
        const isUser: User | null = await verifyJWT( `${token}` );
        if( !isUser ){
            const data = {
                status: 401,
                msg: 'Unauthorized'
            };
            res.status( 401 ).json( data );
            return;
        }
        req.user = isUser;
        next();
    } catch ( error ) {
        const data = {
            status: 401,
            msg: 'Unauthorized'
        };
        res.status( 200 ).json( data )
    }
}

export
{
    validSession,
}
