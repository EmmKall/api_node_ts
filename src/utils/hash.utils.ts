import { hash, compare } from 'bcryptjs';

const encrypt = async ( text: string ) => {

    const hashText = await hash( text, 10 );
    return hashText;
}

const verifyHash = ( plain: string, encrypted: string ): Promise<boolean> => {
    const isValid = compare( plain, encrypted );
    return isValid;
}

export {
    encrypt,
    verifyHash,
}