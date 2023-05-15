
import "./Campo.css"


//este campo por defecto es de tipo texto si no le pasan ningunvalor en su type
// si le pasan un valor se va a comportar como tiene que ser
const Campo = (props) => {


    //destructuracion
    const {type = "text"} = props //esta linea toma el typt de los props que recibe como parametro y no se envian nada entonces toma el valor de "text" para crear el componente de tipo text

    const manejarCambio = (e) =>{
        //setValorInput(e.target.value)
        props.setValor(e.target.value)
    }

    //con el onChange estoy manejando los cambio que se van haciendo en el input(o sea si se escribe algo dentro del input), entonces cada vez que haya un cambio en ese input el "onChange" se va
    // a encargar de llamar a la funcion "manejarCambio" y esta llama a la funcion que estoy recibiendo por los props que es la funcion de la variable que tambien la estoy usando aqui en el atributo value gracias al props en la etiqueta input
    //entonces mis variables que utilizo para enviar cuando se presione el boton de enviar del formulario yo las estoy creando en el componente formulario las paso por los props, y desde aqui las uso y tambien las seteo gracias a la funcion que estoy pasando por los props
    //esa forma de ponerle el nombre de la clase al div es para que tome una configuracion en el css dependiendo del tipo de componente quiero crear
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type={type} placeholder={props.placeholder} required={props.required} value={props.valor} onChange={manejarCambio} />
    </div>
}

export default Campo