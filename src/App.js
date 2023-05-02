
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

//importaciones mias 
import { useState } from 'react';//super importante para realizar el mostrar ocualtar del formulario
import Equipo from './componentes/Equipo/Equipo';

function App() {

  //nombre de mi variable, nombre de metodo para actualizar esa variable = valor inicial de esa variable
  const [formulario, setFormulario] = useState(false)
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)

  //funcion para hacer el cambio del formulario cada vez que se llama esta misma
  const switchFormulario = () =>{
    setFormulario(!formulario)//lo que se hace ese ! es negarlo entonces si estaba true lo pone en false y si estaba en false lo pone en true
  }

  //const equipos = ["Programacion","Front End","Data Science", "Devops", "UX y Diseño", "Movil", "Innovación y Gestión"]


  //lista de objectos de equipos
  const equipos = [

    {titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"Front End",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"Data Science",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },
    
    {titulo:"Devops",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"UX y Diseño",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"Movil",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"Innovación y Gestión",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    }
  ]


  //Este Operador ternario es lo mismo que la linea de abajo
  //formulario ?  <Formulario/> : <></>
  //formulario &&  <Formulario/>
  return (
    <div>
      <Header/>
      {formulario ?  <Formulario/> : <></>}
      <MiOrganizacion switchFormulario={switchFormulario}/>
      <Equipo equipo="Programacion"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Programacion"/>
      <Equipo equipo="Programacion"/>
    </div>
  );
}


export default App;
