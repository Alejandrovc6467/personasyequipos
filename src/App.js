
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

//importaciones mias 
import { useState } from 'react';//super importante para realizar el mostrar ocualtar del formulario
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
import {v4 as uuid} from "uuid"


function App() {

  //➡️ hoooks mios 🙃 
  //const [nombreVariable, funcionActualizar] = useState(valorInicial)
  const [formulario, setFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([

    {id: uuid(), equipo:"Front End", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:true},
    {id: uuid(), equipo:"Front End", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:false},
    {id: uuid(), equipo:"Programación", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:true},
    {id: uuid(), equipo:"Movil", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:false},
    {id: uuid(), equipo:"UX y Diseño", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:true},
    {id: uuid(), equipo:"Devops", foto:"https://github.com/Alejandrovc6467.png", nombre:"Alejandro Vasquez", puesto:"Desarrollador de software", favorito:true}
  ])//agregue varios quemados
  // este array de colaboradores se lo envio a mi componente Equipos

  //el id:uuid(), es el metodo de la libreria que le uso para generar identificadores unicos, antes de usar eso utilizaba el nombre como identificador pero podia haber dos equipos con el mismo nombre
  const [equipos, setEquipos] = useState([

    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },

    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },

    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {
      id:uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {
      id:uuid(),
      titulo:"Innovación y Gestión",
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
    console.log("Nuevo colaborador", colaborador)

    //el Spread operator lo que hace es crear una copia del array original y luego agrega el nuevo elemento en este caso el nuevo colaborador y su sintaxis es asi "setColaboradores([...nombreVariable, nuevoElemento])"
    setColaboradores([...colaboradores,colaborador])
  }

  const eliminarColaborador = (id) =>{

    //aqui lo que hago es crear un nuevo array pero solo con los que son diferentes al que qioero eliminar, ose todos menos el que quiero borrar y luego se lo setteo a mi array con el metodo set
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    setColaboradores(nuevosColaboradores)
  }

  const registrarEquipo = (equipo) =>{
    //este metodo lo paso por props a mi formulario y el lo llama y le pasa todos los datos a mi por el parametro que recibe este metodo, entonces aqui tengo toda la informacion e=necesaria para crear mi targeta de colaborador
    console.log("Nuevo equipo", equipo)

    // hago una co[ia de los equipos , le paso equipo nuevo pero antes tambien le hago una copia para agregarle id unico por eso son esos tres puntos ... eso sigifica copia
    setEquipos([...equipos, {...equipo, id: uuid()}])
  }
  

  const actualizarColorEquipo = (color, id) => {
    //esta funcion la paso por props hasta el componente equipo y la llamo ahi y le paso el color y el equipo y asi modifico los valores del array

    console.log("Actualizar: ", color, id)

    //recorro el array equipos y por cada equipo pregunto si el titulo es igual y entonces lo cambio
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo//este es suer imnportante recordar que esto es react, este return lo que hace es retornar el equipo haya sido modificado si entra por if o no
    })

    setEquipos(equiposActualizados)//aqui no hago lo mismo que en el metodo de registrar un colaborador por eso solo paso un nuevo array entero pero ya con sus respectivas modificaciones
    
  
  }
  

  const actualizarFavorito = (id) =>{
    
    //recorro el array equipos y por cada equipo pregunto si el titulo es igual y entonces lo cambio
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito // lo setteo  el booleano con el valor opuesto 
      }
      return colaborador
    })

    setColaboradores(colaboradoresActualizados)

  }
  

  
 
  //Este Operador ternario es lo mismo que la linea de abajo
  //formulario ?  <Formulario/> : <></>
  //formulario &&  <Formulario/>
  //le voy a enviar al formulario solo los titulos de la lista de equipos
  return (
    <div>
      <Header/>
      {formulario ?  <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}  registrarColaborador={registrarColaborador} registrarEquipo={registrarEquipo}/> : <></>}
      <MiOrganizacion switchFormulario={switchFormulario}/>
      {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColorEquipo={actualizarColorEquipo}  actualizarFavorito={actualizarFavorito} />)}  {/**aqui creo todos los componentes en base al array de equipos que cree arriba y lo rrecorro con un map y ademas le paso el array de colaboradores pero con un filtro donde solo se pasen los pertenecientes a cada equipo gracias al array de equipos.titulo, el key utilize el id unico que genero con la libreria que improte(mentira uso el titulo) pude haberlo hecho poniendole un index mas como parametro al map  */}
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