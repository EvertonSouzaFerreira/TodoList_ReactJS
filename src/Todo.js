import React, { useEffect, useState } from "react";
import Errow from "./Errow"
import TodoForm from "./TodoForm"
import DropDowList from "./DropDowList"
import Item from "./Componets/Item"
import List from "./List";
import ListVlaams from "./ListVlaams";
import Serge from "./Serge";


const SAVED_ITEMS = "savedItems"

function ContainerTodo(){
    
    const[items, setItems]= useState([]);//useState([]) com array porque e uma lista
    

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let item = new Item(text)
        
        setItems([...items, item])

    }

    function onDeletedItem(item) {
        
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems)
    }

    function onDone(item){
        let updatesItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done
            }

            return it;
        })
        setItems(updatesItems)
    }
    

    return(
        <div className="container">
            <div className="continer1">
                <div className="containerTodo sombra">

                    <div className="detalhe sombra detalhe2"></div>
                        <div className="parte2 ">
                        <Errow >
                            <DropDowList onAddItem={onAddItem}></DropDowList>
                        </Errow>
                        
                        </div>
                    <div className="bottom bottomColor sombra"></div>
                </div>
            </div>


            <div className="continer2">
            <div className="containerTodo sombra">

                <div className="detalhe sombra"></div>
                <div className="parte2">
                    <h1>My Todo List</h1>
                        <hr className="sombra"></hr>
                    <TodoForm onAddItem={onAddItem}></TodoForm>
                </div>
                    <List onDone={onDone} onDeletedItem={onDeletedItem} items={items}></List>
                <div className="bottom"></div> 
            </div>
        </div>

             
            <div className="continer3">
            <div className="containerTodo sombra">

                <div className="detalhe sombra detalhe3"></div>
                <div className="parte2">
                    <h1 className="vlaamschH1">My Todo List</h1>
                        <hr className="sombra"></hr>
                    
                </div>
                    <ListVlaams onAddItem={onAddItem}></ListVlaams>
                <div className="bottom bottomColo2 sombra"></div>
            </div>
        </div>
        <div className="continer4 item-6">
            <div className="containerTodo sombra">

                <div className="detalhe sombra detalhe4"></div>
                <div className="parte2 ">
                    <h1 className="jumboH1">My Todo List</h1>
                        <hr className="sombra"></hr>
                    
                </div>
                    <ul className="containerLista">
                        <Serge onAddItem={onAddItem}></Serge>  
                    </ul>
                <div className="bottom bottomColo2 sombra"></div>
            </div>
        </div>
        </div>
    )
    
    
}



export default ContainerTodo
