

const ShoppingItem = (props) => {
    return (
                    <div className="row d-flex justify-content-center mt-100S"> 
                        <div className="col">                           
                           <div className="card">
                               <ul className="list-style-none">
                                   <li className="d-flex no-block card-body">
                                       <i className="fa fa-check-circle w-30px m-t-5"></i>
                                       <div className="text-start">
                                           <a href="#" className="m-b-0 font-medium p-0 text-start" data-abc="true">{props.name}</a>
                                           <span className="text-muted text-start">Tarea N°{props.posicion + 1} </span>
                                       </div>
                                       <div className="position-absolute top-0 start-100">
                                           <div className="tetx-right position-relative">
                                           <button type="button" className="text-end position-relative btn btn-light" onClick={props.deleteItem}>
                                            X  
                                         </button>
                                           </div>
                                       </div>
                                   </li>
                                   </ul>
                                </div>
                            </div>
                        </div>    
                        
    )
}

export default ShoppingItem