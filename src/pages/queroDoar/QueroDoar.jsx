import s from '../queroDoar/queroDoar.module.scss'
import iconeLivro from '../../assets/iconeLivro.png'
import { useState } from 'react'
import axios from "axios"

export default function QueroDoar(){
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo=(e)=>{
    setTitulo(e.target.value)
    }

    const capturaCategoria=(e)=>{
        setCategoria(e.target.value)
    }

    const capturaAutor=(e)=>{
        setAutor(e.target.value)
    }

    const capturaImage_url=(e)=>{
        setImage_url(e.target.value)
    }

    const envioDados=async()=> {
        const dados_organizados = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://desafio-apy.onrender.com/doar", dados_organizados)
    }

    return(
        <main>
            <section className={s.queroDoarSection}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                <form onSubmit={(e)=>e.preventDefault()
}>
                    <div>
                        <img src={iconeLivro} alt=''/>
                        <h2>Informações sobre o livro</h2>
                    </div>

                    <input type='text' name='' id='' placeholder='Título' onChange={capturaTitulo} />
                    <input type='text' name='' id='' placeholder='Categoria' onChange={capturaCategoria} />
                    <input type='text' name='' id='' placeholder='Autor' onChange={capturaAutor} />
                    <input type='text' name='' id='' placeholder='Link da Imagem' onChange={capturaImage_url} />
                    <input type='submit' value="Doar" className={s.buttonDoar} onClick={envioDados}/>
                </form>
            </section>
        </main>
    )
}