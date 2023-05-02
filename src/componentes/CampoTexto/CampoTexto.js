
import "./CampoTexto.css"


const CampoTexto = (props) => {

    const manejarCambio = (e) =>{
        //setValorInput(e.target.value)
        props.setValor(e.target.value)
    }

    //con el onChange estoy manejando los cambio que se van haciendo en el input(o sea si se escribe algo dentro del input), entonces cada vez que haya un cambio en ese input el "onChange" se va
    // a encargar de llamar a la funcion "manejarCambio" y esta llama a la funcion que estoy recibiendo por los props que es la funcion de la variable que tambien la estoy usando aqui en el atributo value gracias al props en la etiqueta input
    //entonces mis variables que utilizo para enviar cuando se presione el boton de enviar del formulario yo las estoy creando en el componente formulario las paso por los props, y desde aqui las uso y tambien las seteo gracias a la funcion que estoy pasando por los props
    return <div className="campo_texto">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio} />
    </div>
}

export default CampoTexto