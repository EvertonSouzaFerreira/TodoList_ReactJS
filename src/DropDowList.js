import React, {useState} from "react";




function DropDowList(props) {
    
    const[text, setText] = useState("")

    function addItem(event) {
    
        setText(...text, event)
        
        props.onAddItem(event)
    }
    return(
        <ul className="containerLista">   
        <li className="sombra">Verse pasta AH (Spaghtti) <button onClick={()=>(addItem("Verse pasta AH (Spaghtti)"))}>Add</button> </li>
        <li className="sombra">Groene verse pesto AH <button onClick={()=>(addItem("Groene verse pesto AH"))}>Add</button> </li>
        <li className="sombra">Peper <button onClick={()=>(addItem("Peper"))}>Add</button> </li>
        <li className="sombra">Zout (fijn) busje <button onClick={()=>(addItem("Zout (fijn) busje"))}>Add</button> </li>
        <li className="sombra">Pak zout <button onClick={()=>(addItem("Pak zout"))}>Add</button> </li>
        <li className="sombra">Schoonmaak azijn <button onClick={()=>(addItem("Schoonmaak azijn"))}>Add</button> </li>
        <li className="sombra">Appels Elstar <button onClick={()=>(addItem("Appels Elstar"))}>Add</button> </li>
        <li className="sombra">Bananen<button onClick={()=>(addItem("Bananen"))}>Add</button> </li>
        <li className="sombra">Aardbei<button onClick={()=>(addItem("Aardbei"))}>Add</button> </li>
        <li className="sombra">Frambozen<button onClick={()=>(addItem("Frambozen"))}>Add</button> </li>
        <li className="sombra">Kersen <button onClick={()=>(addItem("Kersen"))}>Add</button> </li>
        <li className="sombra">Granaatappel-pitjes <button onClick={()=>(addItem("Granaatappel-pitjes"))}>Add</button> </li>
        <li className="sombra">Blauwe bessen<button onClick={()=>(addItem("Blauwe bessen"))}>Add</button> </li>
        <li className="sombra">Mango<button onClick={()=>(addItem("Mango"))}>Add</button> </li>
        <li className="sombra">Kiwi`s gold<button onClick={()=>(addItem("Kiwi`s gold"))}>Add</button> </li>
        <li className="sombra">Peren<button onClick={()=>(addItem("Peren"))}>Add</button> </li>
        <li className="sombra">Kaki fruit<button onClick={()=>(addItem("Kaki fruit"))}>Add</button> </li>
        <li className="sombra">Gewelde pruimen<button onClick={()=>(addItem("Gewelde pruimen"))}>Add</button> </li>
        <li className="sombra">Gewelde abrikozen <button onClick={()=>(addItem("Gewelde abrikozen"))}>Add</button> </li>
        <li className="sombra">Rucula<button onClick={()=>(addItem("Rucula"))}>Add</button> </li>
        <li className="sombra">Veldsla<button onClick={()=>(addItem("Veldsla"))}>Add</button> </li>
        <li className="sombra">Sinazie-pak gewassen<button onClick={()=>(addItem("Sinazie-pak gewassen"))}>Add</button> </li>
        <li className="sombra">Andijvie<button onClick={()=>(addItem("Andijvie"))}>Add</button> </li>
        <li className="sombra">Witlof<button onClick={()=>(addItem("Witlof"))}>Add</button> </li>
        <li className="sombra">Bos worteltjes<button onClick={()=>(addItem("Bos worteltjes"))}>Add</button> </li>
        <li className="sombra">Komkommer<button onClick={()=>(addItem("Komkommer"))}>Add</button> </li>
        <li className="sombra">Tros tomaten<button onClick={()=>(addItem("Tros tomaten"))}>Add</button> </li>
        <li className="sombra">Snoep tomaatjes<button onClick={()=>(addItem("Snoep tomaatjes"))}>Add</button> </li>
        <li className="sombra">Haricots vert<button onClick={()=>(addItem("Haricots vert"))}>Add</button> </li>
        <li className="sombra">Uien (rood)-(wit)-(geel)<button onClick={()=>(addItem("Uien (rood)-(wit)-(geel)"))}>Add</button> </li>
        <li className="sombra">Knoflook<button onClick={()=>(addItem("Knoflook"))}>Add</button> </li>
        <li className="sombra">Peterselie<button onClick={()=>(addItem("Peterselie"))}>Add</button> </li>
        <li className="sombra">Aerdappels(kruimig)<button onClick={()=>(addItem("Aerdappels(kruimig)"))}>Add</button> </li>
        <li className="sombra">Kips Leverworst<button onClick={()=>(addItem("Kips Leverworst"))}>Add</button> </li>
        <li className="sombra">Kaas jong belegen (Wapenaer)<button onClick={()=>(addItem("Kaas jong belegen (Wapenaer)"))}>Add</button> </li>
        <li className="sombra">Spinata Romana <button onClick={()=>(addItem("Spinata Romana"))}>Add</button> </li>
        <li className="sombra">Komijnen kaas jong belegen<button onClick={()=>(addItem("Komijnen kaas jong belegen"))}>Add</button> </li>
        <li className="sombra">Wapenaer<button onClick={()=>(addItem("Wapenaer"))}>Add</button> </li>
        <li className="sombra">Oude Kaas Wapenaer<button onClick={()=>(addItem("Oude Kaas Wapenaer"))}>Add</button> </li>
        <li className="sombra">Parmezaanse Kaas<button onClick={()=>(addItem("Parmezaanse Kaas"))}>Add</button> </li>
        <li className="sombra">Spelt Crackers(dun)<button onClick={()=>(addItem("Spelt Crackers(dun)"))}>Add</button> </li>
        <li className="sombra">Croissant <button onClick={()=>(addItem("Croissant"))}>Add</button> </li>
        <li className="sombra">Honing<button onClick={()=>(addItem("Honing"))}>Add</button> </li>
        <li className="sombra">Wijn (wit/rood)<button onClick={()=>(addItem("Wijn (wit/rood)"))}>Add</button> </li>
        <li className="sombra">Bier Heinken met Alcohol<button onClick={()=>(addItem("Bier Heinken met Alcohol"))}>Add</button> </li>
        <li className="sombra">00 Bier Heineken zonder alcohol<button onClick={()=>(addItem("00 Bier Heineken zonder alcohol"))}>Add</button> </li>
        <li className="sombra">Smeerkaas ERU <button onClick={()=>(addItem("Smeerkaas ERU"))}>Add</button> </li>
        <li className="sombra">Boter<button onClick={()=>(addItem("Boter"))}>Add</button> </li>
        <li className="sombra">Becel bakken en braden (fles/koeling!)<button onClick={()=>(addItem("Becel bakken en braden (fles/koeling!)"))}>Add</button> </li>
        <li className="sombra">Eleren<button onClick={()=>(addItem("Eleren"))}>Add</button> </li>
        <li className="sombra">Verse sinaasappelsap<button onClick={()=>(addItem("Verse sinaasappelsap"))}>Add</button> </li>
        <li className="sombra">Volle melk<button onClick={()=>(addItem("Volle melk"))}>Add</button> </li>
        <li className="sombra">1/2 volle melk<button onClick={()=>(addItem("1/2 volle melk"))}>Add</button> </li>
        <li className="sombra">Haver"melk" blauw<button onClick={()=>(addItem("Haver'melk' blauw"))}>Add</button> </li>
        <li className="sombra">Haver'melk' bruin (Barista)<button onClick={()=>(addItem("Haver'melk' bruin (Barista)"))}>Add</button> </li>
        <li className="sombra">Yogurt (Grote beker) Stand<button onClick={()=>(addItem("Yogurt (Grote beker) Stand"))}>Add</button> </li>
        <li className="sombra">Magere kwark<button onClick={()=>(addItem("Magere kwark"))}>Add</button> </li>
        <li className="sombra">Tortillas Pak<button onClick={()=>(addItem("Tortillas Pak"))}>Add</button> </li>
        <li className="sombra">Quacker Havermout naturel Maxi pak<button onClick={()=>(addItem("Quacker Havermout naturel Maxi pak"))}>Add</button> </li>
        <li className="sombra">Krokante Cruesli(Zonnatura)<button onClick={()=>(addItem("Krokante Cruesli(Zonnatura)"))}>Add</button> </li>
        <li className="sombra">Rijst<button onClick={()=>(addItem("Rijst"))}>Add</button> </li>
        <li className="sombra">IJL Jumbo schepijs vanille<button onClick={()=>(addItem("IJL Jumbo schepijs vanille"))}>Add</button> </li>
        <li className="sombra">Chocolate: Lindt 70%<button onClick={()=>(addItem("Chocolate: Lindt 70%"))}>Add</button> </li>
    </ul>
    
    )
    
}





export default DropDowList