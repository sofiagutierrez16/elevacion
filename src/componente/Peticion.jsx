import { useEffect, useState } from "react"

export const Peticion = ({ buscarPersonaje }) => {

    const [personaje, setPersonaje] = useState([])

    const getPersonaje = async () => {
        let respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${buscarPersonaje}`)
        let datos = await respuesta.json()
       
        setPersonaje(datos.results)
    }

    useEffect(() => {
        getPersonaje()
    }, [buscarPersonaje])
    console.log(personaje)
    return <>
        {personaje.map((element, index) => {
            return <div key={index}>
                <h4>{element.name}</h4>
                <img src={element.image} alt="" />
                <h4>{element.gender}</h4>
                <h4>{element.species}</h4>
                <h4>{element.status}</h4>
            </div>
        })}
    </>

}