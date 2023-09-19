

import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { toast} from "react-toastify"

import './filme-info.css'

import api from '../../services/api'


function Filme() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {

        async function loadFimes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'adde489c365dc208879b95123c41e823',
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setloading(false)
                })
                .catch(() => {
                    console.log('filme não encontrado')
                    navigate("/", { replace: true })
                    return
                })

        }

        loadFimes()
        return () => {
            console.log("COMPONETE FOI DESMONTADO")
        }
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilme) {
            toast.warn("Esse filme já está na sua lista!")
            return
        }
        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        alert('FILME SALVO COM SUCESSO')
        toast.success("filme salvo com sucesso")

    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregande detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={` https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>


            <div className="area-button">
                <button onClick={salvarFilme}>salvar</button>

                <button >
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>

        </div>

    )
}
export default Filme
