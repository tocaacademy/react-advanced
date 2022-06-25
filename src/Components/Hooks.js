import React, { useState, useEffect, createRef } from "react";


export const IncrementNumber = (props)=>{
    const [number, setNumber] = useState(0)//Manejo de estados con Hooks
    // cons [workers, setWorkers] = useState([])
    // cons [workerToEdit, setWorkerToEdit] = useState({})
    const [nombre,setNombre] = useState("")

    const textNombre = createRef()

    // Sintaxis simplre de useEfect
    //useEffect nos permite manejar el ciclo de vida del componente
    useEffect(()=>{//Se lanza luego de renderizado
        setNumber(props.number)
    },[])

    useEffect(()=>{//Se lanza por cambio
        if(nombre.trim()!=''){
            setNumber(number*10)
        }
        
    },[nombre])


    const incrementTheNumer=()=>{
        setNumber(number + 1)
    }

    const changeNombre=()=>{
        setNombre(textNombre.current.value)
    }
    return(
        <>
            <h1>You clicked {number} times</h1>
            <input type="button" 
                    onClick={incrementTheNumer} 
                    value="Click me"/>

            <div>
                <br/>
                <input type="text" ref={textNombre}/>

                <button type="button" onClick={changeNombre}>
                    Cambiar Nombre
                </button>
            </div>
        </>
    )
}