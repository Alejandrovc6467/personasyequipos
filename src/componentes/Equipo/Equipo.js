
import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"

const Equipo = ( props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props // es lo mismo que hacer props.colaboradores y asi no tengo que estar escribiendo props solo colaboradores



    //voy a retornar el equipo solo si el array de colaboradores viene lleno, si viene vacio no

    // pude haberlo sin en el array de arriba y solo poner esto "props.datos.colorSecundario" pero creo que es mas sencillo como lo estoy haciendo
    return <>

    { colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: colorSecundario  }}>

            <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                
                {//recordar que el map siempre debe de ir con su atributo key unico, por eso en este caso utilize el index del mismo map
                    props.colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}  colorPrimario={colorPrimario}/>)
                }
                
            </div>

        </section>
    }
    </>
}


//formulario ?  <Formulario/> : <></>
//formulario &&  <Formulario/>   esta es la forma que utilizo para mi retorno nada mas que las

export default Equipo
