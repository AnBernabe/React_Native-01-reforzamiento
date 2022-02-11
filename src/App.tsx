// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Funciones } from './typescript/Funciones';
// import { ObjetosListerales } from './typescript/ObjetosListerales';

import { Formularios } from "./components/Formularios";

// import { Usuarios } from "./components/Usuarios";

// import { Contador } from "./components/Contador";
// import { ContadorConHook } from "./components/ContadorConHook";
// import { Login } from './components/Login';


const App = () => {
  return <div className='mt-2'>
    <h1> Introduccion a React Native</h1>
    <hr />
    {/* <TiposBasicos></TiposBasicos> */}
    {/* <ObjetosListerales></ObjetosListerales> */}
    {/* <Funciones></Funciones> */}
    {/* <Contador></Contador> */}
    {/* <ContadorConHook></ContadorConHook> */}
    {/* <Login></Login> */}
    {/* <Usuarios></Usuarios> */}
    <Formularios></Formularios>
  </div>;
};

export default App;