interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNro: number
}


export const ObjetosListerales = () => {

    const persona: Persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNro: 615
        }
    };

    return <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>;
};
