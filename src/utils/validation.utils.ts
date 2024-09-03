import { Response } from "express";
import { InvalidError } from "../interface/invalidError.interface";

//ToDo: Protect from sql inyection
//const invalidCharacters = [ 'getAll', 'find', 'create', '=', 'OR', '' ];
const validDataInput = async ( res: Response, keys: any, data: any ) => {
    let errors: Array<InvalidError> = [];
    await keys.forEach( ( item: any ) => {
        if( item.required && data[ item.name ] === undefined ){
            errors = [ ...errors, { label: `${ item.name }`, error: `${ item.name } is required` } ];
        } else if( item.required && typeof( data[ item.name ] ) !== item.type ){
            errors = [ ...errors, { label: `${ item.name }`, error: `Type of data shuld be: ${ item.type }` } ];
        } else if( item.required && item.min && data[ item.name ].length < item.min ){
            errors = [ ...errors, { label: `${ item.name }`, error: `Min length: ${ item.min }` } ];
        } else  if( item.required && item.max && data[ item.name ].length < item.max ){
            errors = [ ...errors, { label: `${ item.name }`, error: `Max length: ${ item.max }` } ];
        }
    });
    if( errors.length > 0 ){
        const response = {
            status: 400,
            msg: 'Invalid data',
            errors
        };
        res.status( 200 ).json( response );
        return false;
    }
    return true;
}

export { validDataInput };

