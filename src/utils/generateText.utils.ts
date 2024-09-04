const characters = 'abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateText = ( long: number ) =>
{
    const totalCharacters: number = characters.length;
    let text = '';
    for( let i = 0; i< long; i++ ){
        text += characters.charAt( Math.floor( Math.random() * totalCharacters ) ); 
    }
    return text;
}

export{
    generateText,
}