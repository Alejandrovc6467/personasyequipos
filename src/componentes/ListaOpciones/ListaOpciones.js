import "./ListaOpciones.css"



const ListaOpciones = (props) => {

    
    //este array simula como si lo hubiera tomado de un a base de datos y ahora lo recorro con un map
    const equipos = ["Programacion","Front End","Data Science", "Devops", "UX y Diseño", "Movil", "Innovación y Gestión"]

    return <div className="lista_opciones">
        <label>Equipos</label>
        <select>
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
             * el atributo key esta detro de la etiqueta option es una regla de java, la cual necesita diferenciar un componente por un identificador que este caso se lo damos con el pos del index del array
             */}
             <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}

            {/*Entonces lo que estoy haciendo es retornar la cantidad del tamanio del array en etiquetas opcion */}
        </select>
        
    </div>
}

export default ListaOpciones