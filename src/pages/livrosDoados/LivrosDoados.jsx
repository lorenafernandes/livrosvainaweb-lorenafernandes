import s from '../livrosDoados/livrosDoados.module.scss'
import livroProtagonista from '../../assets/livroProtagonista.png'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

export default function LivrosDoados(){
    const [livros, setLivros] = useState([])
    
    const puxarLivros = async() =>{
        const resposta = await axios.get("https://desafio-apy.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(()=>{
        puxarLivros()
    })


    return(
        <main>
            <section className={s.livrosDoadosSection}>
                <h2>Livros Doados</h2>

                <section className={s.containerCards}>
                    <section>
                        <img src={livroProtagonista} alt='Imagem da capa do livro O Protagonista' />

                        <div>
                            <h3>O protagonista</h3>
                            <p>Susanne Andrade</p>
                            <p>Ficção</p>
                        </div>
                    </section>

                    {livros.map((item) => (
                <section>
                    <div>
                        <h3>{item.titulo}</h3>
                        <img src={item.image_url} alt={item.titulo} />
                    </div>
                </section>
                ))}
            </section> 
            </section>
        </main>
    )
}