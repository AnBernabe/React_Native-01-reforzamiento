

export const TiposBasicos = () => {

    const nombre = 'Fernando';
    const edad = 14;
    const estaActivo = true;

    const poderes: Array<string> = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return <>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        <br />
        {poderes.join(', ')}
    </>;
};
