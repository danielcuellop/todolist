const ShoppingItem = (props) => {
    return (
        <li>
            <p>
                {props.name}
            </p>
            <button onClick={props.deleteItem}>
                Eliminar del carrito
            </button>
        </li>
    )
}

export default ShoppingItem