import React from "react";

function List(props) {

    function DoneImg(props) {
        if(props.done){
            return(<img src="../assets/on.png"></img>)
        }else{
            return(<img src="../assets/off.png"></img>)
        }
    }

return(<ul className="containerLista">
    {props.items.map(item => <li  key={item.id} className= {item.done ? "done" : "sombra"}>
        {item.text}
        <div>
        <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
        <button onClick={()=> {props.onDeletedItem(item)}}><img src="../assets/bin.png"></img></button>
        </div>
        
    </li>)}                       
</ul>
)
    
}


export default List