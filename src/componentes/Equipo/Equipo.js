
import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = ( props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props // es lo mismo que hacer props.colaboradores y asi no tengo que estar escribiendo props solo colaboradores

    //puedo hacer esto para la propiedad del background y pasarlo solo ob
    const ob = { backgroundColor: hexToRgba(colorPrimario,0.6)}

    //para manejar el envio de los datos del cambio del color
    const manejarEnvio = (e) => {
        props.actualizarColorEquipo(e.target.value, titulo)
        //pude haberlo hecho en una solo linea una arrow function en la linea del return como lo hago en esta linea comnentada de aqui abajo, pero me parece mejor asi, mas estructurado y independiente
        // <input type="color" className="input_color"  value={colorSecundario} onChange={(e) => {props.actualizarColorEquipo(e.target.value, titulo) }}/>{/*como yo le estoy agregamdo un valor al value de este input el navegador me tira un error y para solucionarlo lo que me dice es que tengo que estar controlando yo los cambios de este value con algun metodo, entonces por eso pongo ese atributo onChange para controlarlo yo y quitarle la responsabilidad al navegador */}
    }

   
    //voy a retornar el equipo solo si el array de colaboradores viene lleno, si viene vacio no
    // pude haberlo sin en el array de arriba y solo poner esto "props.datos.colorSecundario" pero creo que es mas sencillo como lo estoy haciendo
    return <>

    { colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba( colorPrimario,0.5)}}>

            <input type="color" className="input_color"  value={colorPrimario} onChange={manejarEnvio }/>{/*como yo le estoy agregamdo un valor al value de este input el navegador me tira un error y para solucionarlo lo que me dice es que tengo que estar controlando yo los cambios de este value con algun metodo, entonces por eso pongo ese atributo onChange para controlarlo yo y quitarle la responsabilidad al navegador */}
            <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                
                {//recordar que el map siempre debe de ir con su atributo key unico, por eso en este caso utilize el index del mismo map
                    props.colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}  colorPrimario={colorPrimario}  eliminarColaborador={props.eliminarColaborador}/>)
                }
                
            </div>

        </section>
    }
    </>
}


//formulario ?  <Formulario/> : <></>
//formulario &&  <Formulario/>   esta es la forma que utilizo para mi retorno nada mas que las

export default Equipo
