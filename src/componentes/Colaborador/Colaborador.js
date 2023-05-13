
import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"



//recibo los datos por los props entonces por eso haga el style inline con la informacion de los props y obvio ta,bien el nombre y puesto
const Colaborador = (props) =>{



    // hecho por mi, creo que no va a ser necesario 
    const manejarAccion = () =>{

        props.eliminarColaborador()
    } 


    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={props.eliminarColaborador} />
        
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