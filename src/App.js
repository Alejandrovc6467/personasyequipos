
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

//importaciones mias 
import { useState } from 'react';//super importante para realizar el mostrar ocualtar del formulario
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';



function App() {

  //hoooks mios 🙃 
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)
  const [formulario, setFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([])
  // este array de colaboradores se lo envio a mi componente Equipos



  
  //funcion para hacer el cambio del formulario cada vez que se llama esta misma
  const switchFormulario = () =>{
    setFormulario(!formulario)//lo que se hace ese ! es negarlo entonces si estaba true lo pone en false y si estaba en false lo pone en true
  }


  const registrarColaborador = (colaborador) =>{
    //este metodo lo paso por props a mi formulario y el lo llama y le pasa todos los datos a mi por el parametro que recibe este metodo, entonces aqui tengo toda la informacion e=necesaria para crear mi targeta de colaborador
    console.log("NUevo colaborador", colaborador)

    //el Spread operator lo que hace es crear una copia del array original y luego agrega el nuevo elemento en este caso el nuevo colaborador y su sintaxis es asi "setColaboradores([...nombreVariable, nuevoElemento])"
    setColaboradores([...colaboradores,colaborador])
  }

  

  //lista de objectos de equipos
  const equipos = [

    {titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    
    {titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },

    {titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ]


  //Este Operador ternario es lo mismo que la linea de abajo
  //formulario ?  <Formulario/> : <></>
  //formulario &&  <Formulario/>
  //le voy a enviar al formulario solo los titulos de la lista de equipos
  return (
    <div>
      <Header/>
      {formulario ?  <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}  registrarColaborador={registrarColaborador}/> : <></>}
      <MiOrganizacion switchFormulario={switchFormulario}/>
      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/>)}  {/**aqui creo todos los componentes en base al array de equipos que cree arriba y lo rrecorro con un map y ademas le paso el array de colaboradores pero con un filtro donde solo se pasen los pertenecientes a cada equipo gracias al array de equipos.titulo el mismo que utilizo para las key de los equipos  */}
      <Footer/>
    </div>
  );
}

//https://github.com/Alejandrovc6467.png
export default App;

/**
  ESto es lo mismo que escribirlo en una sola linea, asi es mas comprensible 
  pero de la forma de arriba es mas profesional
  
   {
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo}/>
        })
      }
 */