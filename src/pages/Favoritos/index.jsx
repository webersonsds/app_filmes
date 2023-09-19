import React, { useEffect, useState } from 'react'

import { toast} from "react-toastify"

import './styles.css'
import { Link } from 'react-router-dom'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id) {
        let filtrofilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtrofilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtrofilmes))
        toast.success("filme removido com sucesso")
    }

    return (
        <div className='meus-filmes'>
            <h1 >Meus filmes</h1>
           {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}> Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favoritos