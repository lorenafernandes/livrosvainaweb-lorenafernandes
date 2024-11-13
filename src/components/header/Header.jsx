import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header () {
    return (
       <BrowserRouter>
            <header>
                <section>
                    <img src={logoLivro} alt="Imagem de ilustração de livro com capa azul aberto." />
                        <h1>Livros Vai na Web</h1>
                </section>

                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/doados'>Livros Doados</Link></li>
                        <li><Link to='/doar'>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section>
                    <input type="search" name="" id="" placeholder="O que você procura?"></input>
                    <button><img src={lupa} alt="Imagem de luá branca" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route path='/'/>
                <Route path='/doados' />
                <Route path='/doar'/>
            </Routes>
        </BrowserRouter>
    )
}