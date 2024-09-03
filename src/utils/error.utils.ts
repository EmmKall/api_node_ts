import { Response } from "express";

const handleErrorHttp = ( res: Response, error: string, errorRaw: any  = null ) =>
{
    //console.log( errorRaw );
    const response = {
        status: 400,
        msg: `Error: ${error}  ${errorRaw._message ?? ''}`,
    };
    res.status( 200 )
    res.send( response )
}

const handleSucessResponse = ( res: Response, status: number, msg: string, data: [] | {} | any ) =>
{
    const response = {
        status,
        msg,
        data
    };
    res.status( status ).json( response );
};

export {
    handleErrorHttp,
    handleSucessResponse
};
