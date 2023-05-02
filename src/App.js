
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

//importaciones mias 
import { useState } from 'react';//super importante para realizar el mostrar ocualtar del formulario

function App() {

  //nombre de mi variable, nombre de metodo para actualizar esa variable = valor inicial de esa variable
  const [formulario, setFormulario] = useState(true)
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)

  //funcion para hacer el cambio del formulario cada vez que se llama esta misma
  const switchFormulario = () =>{
    setFormulario(!formulario)//lo que se hace ese ! es negarlo entonces si estaba true lo pone en false y si estaba en false lo pone en true
  }

  //Este Operador ternario es lo mismo que la linea de abajo
  //formulario ?  <Formulario/> : <></>
  //formulario &&  <Formulario/>

  return (
    <div>
      <Header/>
      {formulario ?  <Formulario/> : <></>}
      <MiOrganizacion switchFormulario={switchFormulario}/>
    </div>
  );
}


export default App;
