import s from './footer.module.scss'
import logoFacebook from '../../assets/face.png'
import logoTwitter from '../../assets/twitter.png'
import logoYoutube from '../../assets/youtube.png'
import logoLinkedin from '../../assets/linkedin.png'
import logoInstagram from '../../assets/instagram.png'


export default function Footer(){
    return (
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>(00) 0000-0000</p>

                <nav>
                    <a href=""><img src={logoFacebook} alt="Imagem branca com a logo do Facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Imagem branca com a logo do Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Imagem branca com a logo do YouTube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Imagem branca com a logo do Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="Imagem branca com a logo do Instagram" /></a>
                </nav>
            </section>

            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}