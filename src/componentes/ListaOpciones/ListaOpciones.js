import "./ListaOpciones.css"



const ListaOpciones = (props) => {


   

    const manejarCambio = (e) =>{
        props.setValor(e.target.value)
    }

    return <div className="lista_opciones">
        <label>Equipos</label>          
        <select onChange={manejarCambio} required>
            {/* // normalmente esto lo hubiera realizado de esta forma pero tengo que tomar en cuenta que estos datos podrian estar en una base de datos y yo tendria que perdirlos
            //por eso lo voy a realizar de con un map, tambien podria recorrerlo con un foreach o un for simple, pero segun los profes un map es lo mas usado
            <option>Programacion</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX y Diseño</option>
            <option>Movil</option>
            <option>Innovación y Gestión</option>
            */}

            {/**el map recibe dos parametros el index y un nombre en este caso equipo que se utiliza para realizar los llamdos como en un foreach de java
             * el atributo key(indispensable) esta dentro de la etiqueta option es una regla de java, la cual necesita diferenciar un componente por un identificador que este caso se lo damos con el pos del index del array
             */}
             <option value="" >Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}

            {/*Entonces lo que estoy haciendo es retornar la cantidad del tamanio del array en etiquetas opcion */}
        </select>
        
    </div>
}

export default ListaOpciones