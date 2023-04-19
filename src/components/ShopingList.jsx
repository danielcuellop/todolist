import { useState } from "react";
import ShoppingItem from "./ShopingItem.jsx";


const ShoppingList = () => {
    // vamos crear una variable de estado que guarde lo que escribo en el input
    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handleInputChange = (event) => {
        setItem(event.target.value)
        console.log('handleInputChange')
    }

    // cuando apriete el boton de agregar el valor del input lo vamos a añadir a un array
    const handleAddItem = () => {
        const newList = [...list];
        newList.push(item);
        setList(newList);
        setItem('')
    }

    const handleDeleteItem = (index) => {
        // list.splice(index, 1)
        setList((previousList) => {
            const auxList = [...previousList]
            auxList.splice(index, 1)
            return auxList
        })
    }
 
    window.addEventListener("keydown", (e)=>{
        if(e.keyCode===13){
            handleAddItem();
        }
    })

    return (
        
        <div className="container row justify-content-center">
            <h1>TODO</h1>
            <div className="col-6">
            <p className="list-group">
                {<input type="text" className="bg-light" value={item} onChange={handleInputChange} placeholder="Whats need to be done?" onClick={handleInputChange}/>
                }
                {
                    list.map((item, index) => (
                        <ShoppingItem
                        name={item}
                        posicion={index}
                        deleteItem={() => { handleDeleteItem(index)}}
                    />
                    ))
                }
            </p>
            </div>
            
        </div>
    )
}

export default ShoppingList
