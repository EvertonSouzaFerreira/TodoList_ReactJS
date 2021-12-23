import React, {useState} from "react";

function Serge(props){

    const[text, setText] = useState("")

    function addItem(event) {
    
        setText(...text, event)
        
        props.onAddItem(event)
    }
    return(
        <ul className="containerLista">   
        <li className="sombra">Feijao <button onClick={()=>(addItem("Feijao"))}>Add</button> </li>
        <li className="sombra">Arroz <button onClick={()=>(addItem("Arroz"))}>Add</button> </li>
        <li className="sombra">Queijo <button onClick={()=>(addItem("Queijo"))}>Add</button> </li>
        
        
    </ul>
    
    )
}



export default Serge