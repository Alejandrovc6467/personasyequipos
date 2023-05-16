import App from "../../App"
import "./MiOrganizacion.css"

const MiOrganizacion = (props) => {

    const manejarClick = () =>{
        //Estado - hooks
        //useState           recordar importar el useState dentro del componente donde se va a arealizar el cambio de estado en este caso el app.js   de esta forma    import {useState} from 'react';
        // const [nombreVariable, funcionActualizar] = useState(valorInicial)
        console.log("mostrar oculatr")
        //props.switchFormulario
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="img/botonAdd.png" alt="add image" onClick={props.switchFormulario} />
    </section>
}

export default MiOrganizacion