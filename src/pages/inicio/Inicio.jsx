import s from './inicio.module.scss'
import Comunidade from '../../assets/comunidade.png';
import Leitura from '../../assets/leitura.png';
import Unidos from '../../assets/unidos.png';
import Justica from '../../assets/justica.png';

export default function Inicio(){
        return(
            <main>
                <section className={s.primeiraSessaoInicio}>
                    <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>

                <section className={s.porqueDoar}>
                    <h2>Por que devo doar?</h2>

                    <section className={s.containerCards}>
                        <section>
                            <img src={Comunidade} alt='Imagem ilustrando círculo social de 4 pessoas' />
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </section>

                        <section>
                            <img src={Leitura} alt='Imagem ilustrando pessoa lendo' />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </section>

                        <section>
                            <img src={Unidos} alt='Imagem ilustrando 6 pessoas mudando vidas' />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </section>

                        <section>
                            <img src={Justica} alt='Imagem ilustrando a balança da justiça' />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                        </section>
                    </section>
                </section>
            </main>
        )
}