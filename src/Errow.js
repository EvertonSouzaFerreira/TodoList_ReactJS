import React, {useState} from "react";




function Errow(props){

    const [aberto , setAberto] = useState(false);

    return(
        
        <div className="parte2 ">
            
            <h1 className="jumboH1">My Todo List</h1>
            <a className="errow" onClick={()=> setAberto(!aberto)}>{props.icon}</a>
            <hr className="sombra"></hr>
            
            {aberto && props.children}
            
            
        </div>
               
    );


    
}

export default Errow