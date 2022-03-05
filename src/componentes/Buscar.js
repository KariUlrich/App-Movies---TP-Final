import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Buscar.scss";
import { BsSearch } from "react-icons/bs"



const Buscar = () => {

    const [searchParams, setSearchParams] = useSearchParams({busqueda:""})
    const [valorDelInput, setValorDelInput] = useState("")

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    const handleClick = () => {
        setSearchParams({busqueda: valorDelInput})
         
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
    }

    return(
         <div className="formulario">
              <form onSubmit = {handleSubmit}>
              <h3>Busca tu película</h3>
              <input className="input-peli" type= "text" onChange = {handleChange} value={valorDelInput}></input>
              <button className="boton-submit" type= "submit" onClick = {handleClick}> <BsSearch /> </button>
              </form>
         </div>

    )
}

export default Buscar