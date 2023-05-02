
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from "react"

const Formulario = () => {

    //estas son mis variables que utilizo para el formulario, las seteo dentro de los componentes, por eso las envio como props como "valor" y como "setValor"
    //luego las envio como un objecto para crear las tarjetas en el equipo elegido
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")


    const manejarEnvio = (e) => {
        //el e.preventDefault es el encargado de NO recargar la pagina y solo llamar a esta funcion y realizar lo que este escrito aquí, claro el formulario llama a la funcion onSubmit y le pasa por parametro esta funcion
        e.preventDefault()
        
        //objecto
        let datosAEnviar = {nombre, puesto, foto, equipo}
        console.log("Datos a enviar", datosAEnviar)
    
    }
    
    //este onSubmit del form es como el onClick pero este es cuando se presiona el boton especifico del form
    return <section className="formulario" >
        <form onSubmit={manejarEnvio} >
            <h4>Rellena el formulario para crear el colaborador.</h4>
            <CampoTexto titulo="Nombre" placeholder="Ingrese nombre" required={false} valor={nombre} setValor={setNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingrese puesto" required   valor={puesto} setValor={setPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"  valor={foto} setValor={setFoto}/>
            <ListaOpciones   valor={equipo} setValor={setEquipo} />
            <Boton texto="Crear"/>
        </form>
    </section>
    
}

export default Formulario