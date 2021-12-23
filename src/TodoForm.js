import React, {useState} from "react";


function TodoForm(props) {

    const[text, setText] =useState("")

function handleChange(event) {
    let t = event.target.value;
    setText(t);
}

function addItem(event) {
    event.preventDefault(); //parao botao nao carregar ao clica-lo

    props.onAddItem(text)
    
    // setItems([...items, text]) // devemos colocar dentro de um arry porque e uma lista e colocamos o ...items, text por paranao subustituir ao add na lista
    setText("")//para limpar o imput
}

   return( <form>
        <input onChange={handleChange} value={text} className="sombra" type="text" id="texto" placeholder="Name"></input>
        <button onClick={addItem} className="sombra">Add</button>
    </form>
   )
}

export default TodoForm