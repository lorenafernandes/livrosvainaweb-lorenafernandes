import s from '../queroDoar/queroDoar.module.scss'
import iconeLivro from '../../assets/iconeLivro.png'

export default function QueroDoar(){
    return(
        <main>
            <section className={s.queroDoarSection}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                <form action=''>
                    <div>
                        <img src={iconeLivro} alt=''/>
                        <h2>Informações sobre o livro</h2>
                    </div>

                    <input type='text' name='' id='' placeholder='Título' />
                    <input type='text' name='' id='' placeholder='Categoria' />
                    <input type='text' name='' id='' placeholder='Autor' />
                    <input type='text' name='' id='' placeholder='Link da Imagem' />
                    <input type='submit' value="Doar" className={s.buttonDoar}/>
                </form>
            </section>
        </main>
    )
}