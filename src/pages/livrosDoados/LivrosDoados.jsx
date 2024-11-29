import s from '../livrosDoados/livrosDoados.module.scss'
import livroProtagonista from '../../assets/livroProtagonista.png'

export default function LivrosDoados(){
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
                </section>
            </section>
        </main>
    )
}