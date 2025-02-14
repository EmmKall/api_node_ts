import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${ __dirname }`;

const router = Router();

const cleanFileName = ( fileName: string ) => {
    return fileName.split( '.' ).shift();
}

readdirSync( PATH_ROUTER ).filter ( ( fileName ) => {
    const cleanName = cleanFileName( fileName );
    
    if( cleanName !== 'index' ){
        import( `./${cleanName}.route` ).then( ( module ) => {
            router.use( `/${cleanName}`, module.router );
            //console.log( `Loading: ./${cleanName}.route` + ` route: /${cleanName}` );
        });
    }
});

export { router };
