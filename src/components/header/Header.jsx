import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import s from '../header/header.module.scss'

export default function Header () {
    return (
       <BrowserRouter>
            <header className={s.header}>
                <section className={s.logoHeader}>
                    <img 
                    src={logoLivro} 
                    alt="Imagem de ilustração de livro com capa azul aberto." />
                        <h1>Livros Vai na Web</h1>
                </section>

                <nav className={s.navHeader}>
                    <ul>
                        <li className={s.link}>
                            <Link to='/'>
                                Início
                            </Link>
                        </li>
                        <li className={s.link}>
                            <Link to='/doados'>
                                Livros Doados
                            </Link>
                        </li>
                        <li className={s.link}>
                            <Link to='/doar'>
                                Quero Doar
                            </Link>
                        </li>
                    </ul>
                </nav>

                <section className={s.barraDeBusca}>
                    <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder="O que você procura?">
                    </input>

                    <button>
                        <img src={lupa} alt="Imagem de luá branca" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/doados' element={<LivrosDoados/>}/>
                <Route path='/doar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}