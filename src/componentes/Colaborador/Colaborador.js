
import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"



//recibo los datos por los props entonces por eso haga el style inline con la informacion de los props y obvio ta,bien el nombre y puesto
const Colaborador = (props) =>{

    //esta es una forma de usar los props, es como ordenarlos de otra forma
    const {nombre, puesto,foto, equipo, id} = props.datos


    // hecho por mi, creo que no va a ser necesario 
    const manejarAccion = () =>{

        props.eliminarColaborador(id)
        //pude no crear esta funcion y no llamarla y solo hacerlo es la misma linea asi ( <AiFillCloseCircle className="eliminar" onClick={() => props.eliminarColaborador(id)} />)
    } 


    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={manejarAccion} />{/* pude hacerlo asi directamenete      <AiFillCloseCircle className="eliminar" onClick={() => props.eliminarColaborador(id)} />     */}
        
        <div className="encabezado" style={{ backgroundColor: props.colorPrimario  }}>
            <img src={props.datos.foto} alt={"foto de "+props.datos.nombre}/>
        </div>
        <div className="info">
            <h4>{props.datos.nombre}</h4>
            <h5>{props.datos.puesto}</h5>
        </div>

    </div>
}

//style={{ backgroundColor: colorSecundario  }}

export default Colaborador