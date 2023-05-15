
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from "react"

const Formulario = (props) => {

    //estas son mis variables que utilizo para el formulario, las seteo dentro de los componentes, por eso las envio como props como "valor" y como "setValor"
    //luego las envio como un objecto para crear las tarjetas en el equipo elegido
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")


    //useState para formulario 2 el de equipos
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const manejarEnvio = (e) => {
        //el e.preventDefault es el encargado de NO recargar la pagina y solo llamar a esta funcion y realizar lo que este escrito aquí, claro el formulario llama a la funcion onSubmit y le pasa por parametro esta funcion
        e.preventDefault()
        
        //objecto
        let datosAEnviar = {nombre, puesto, foto, equipo}
        props.registrarColaborador(datosAEnviar)//este metodo que estoy pasando por props lo cree en App.js este recibe un parametro que es el colaborador, lo que le estoy enviando por aqui, y de esta manera le envio la informacion que recolecte en mi
        //componente formulario a mi componente App.js, es practicamente lo que hago con los campos de texto para traer la informacion de cada uno de ellos aqui
        
    }
    

    const manejarNuevoEquipo = (e) => {
        //el e.preventDefault es el encargado de NO recargar la pagina y solo llamar a esta funcion y realizar lo que este escrito aquí, claro el formulario llama a la funcion onSubmit y le pasa por parametro esta funcion
        e.preventDefault()
       
       // let datosAEnviar = {titulo, colorPrimario: color}
        //props.registrarEquipo(datosAEnviar) 
        
        //o asi mas simple y no creo variables innecesarias
        props.registrarEquipo({titulo, colorPrimario: color})
        // le pongo colorPrimario para que el color que estoy recibiendo se vaya directo  con ese nombre como parametro, tambien pude llamar el atributo color como colorPrimario  y ahorarme eso  
    }


    //este onSubmit del form es como el onClick pero este es cuando se presiona el boton especifico del form
    return <section className="formulario" >
        <form onSubmit={manejarEnvio} >
            <h4>Rellena el formulario para crear el colaborador.</h4>
            <Campo titulo="Nombre" placeholder="Ingrese nombre" required={false} valor={nombre} setValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingrese puesto" required   valor={puesto} setValor={setPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto"  valor={foto} setValor={setFoto}/>
            <ListaOpciones   valor={equipo} setValor={setEquipo} equipos={props.equipos} />
            <Boton texto="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo} >
            <h4>Rellena el formulario para crear el Equipo.</h4>
            <Campo titulo="Titulo" placeholder="Ingrese titulo" required={false} valor={titulo} setValor={setTitulo} />
            <Campo type="color" titulo="Color" placeholder="Ingrese color en HEX" required   valor={color} setValor={setColor}/>
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
    
}

export default Formulario