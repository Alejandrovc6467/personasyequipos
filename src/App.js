
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

//importaciones mias 
import { useState } from 'react';//super importante para realizar el mostrar ocualtar del formulario
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';



function App() {

  //➡️ hoooks mios 🙃 
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)
  const [formulario, setFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([

    {equipo:"Front End", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"},
    {equipo:"Front End", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"},
    {equipo:"Programación", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"},
    {equipo:"Movil", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"},
    {equipo:"UX y Diseño", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"},
    {equipo:"Devops", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro", puesto:"Instructor"}
  ])//agregue varios quemados
  // este array de colaboradores se lo envio a mi componente Equipos
  const [equipos, setEquipos] = useState([

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
  ])



  //➡️ funciones mias 
  
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

  const eliminarColaborador = () =>{

    console.log("Eliminar colaborador")
    //lo que pienso que va a realizar es hacer llegar esta funcion hasta los colaboradores
    // y que esta reciba un parametro en cual va a ser el indentificador y con eso eliminar el que
    // coincida con el mi array de colaboradoes 
    // tambien tener en cuenta que no tengo que refrezcar la pagina debo lo no refrez
  }

  const actualizarColorEquipo = (color, titulo) => {
    //esta funcion la paso por props hasta el componente equipo y la llamo ahi y le paso el color y el equipo y asi modifico los valores del array

    console.log("Actualizar: ", color, titulo)

    //recorro el array equipos y por cada equipo pregunto si el titulo es igual y entonces lo cambio
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo//este es suer imnportante recordar que esto es react, este return lo que hace es retornar el equipo haya sido modificado si entra por if o no
    })

    setEquipos(equiposActualizados)//aqui no hago lo mismo que en el metodo de registrar un colaborador por eso solo paso un nuevo array entero pero ya con sus respectivas modificaciones
    
  
  }
  
  

  
 
  //Este Operador ternario es lo mismo que la linea de abajo
  //formulario ?  <Formulario/> : <></>
  //formulario &&  <Formulario/>
  //le voy a enviar al formulario solo los titulos de la lista de equipos
  return (
    <div>
      <Header/>
      {formulario ?  <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}  registrarColaborador={registrarColaborador}/> : <></>}
      <MiOrganizacion switchFormulario={switchFormulario}/>
      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColorEquipo={actualizarColorEquipo} />)}  {/**aqui creo todos los componentes en base al array de equipos que cree arriba y lo rrecorro con un map y ademas le paso el array de colaboradores pero con un filtro donde solo se pasen los pertenecientes a cada equipo gracias al array de equipos.titulo el mismo que utilizo para las key de los equipos  */}
      <Footer/>
    </div>
  );
}


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