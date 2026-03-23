import './home.css'
import { Link } from 'react-router-dom'

import foto from '../../assets/5969113.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import projeto from '../../assets/espaçopetisco.png'
import projeto2 from '../../assets/mercadolivre.png'
import projeto3 from '../../assets/meutopjogos.png'


function Home() {

    return (

        <div className='body'>

            <div className='header'>
                <p className='tituloo'> portfólio</p>
                <ul>
                    <li><a className='homee' href='#Home'>Home</a></li>
                    <li><a className='sobreminn' href='#sobremin'>Sobre min</a></li>
                    <li><a className='projetoo' href='#projetos'>Projetos</a></li>
                    <li><Link className='link' to="/contato"><a>Contato</a></Link></li>
                </ul>
            </div>
            <main id='Home'>


                <img className='logo' src={foto} alt="Minha foto" />
                <h1>Werther Crisley</h1>
                <h2>Desenvolvedor <span>Front-End</span></h2>
                <div className='itemlinkedin'>
                    <h5><span className='linkedin'><i class="bi bi-linkedin"></i></span>
                        <span className='github'><i class="bi bi-github"></i></span>


                    </h5></div></main>

            <div id='sobremin' className='sobremin'>
                <h2>Sobre min</h2>
                <div className='legendaSobremin'> <p>Sou um desenvolvedor front-end apaixonado por transformar ideias em interfaces modernas, funcionais e intuitivas. Tenho experiência com HTML, CSS, JavaScript e React, criando aplicações responsivas e focadas na melhor experiência do usuário. Gosto de trabalhar com código limpo, organizado e de fácil manutenção, sempre buscando evoluir minhas habilidades e aprender novas tecnologias. Atualmente, também atuo em projetos freelancer, desenvolvendo soluções personalizadas para diferentes necessidades. Estou em constante evolução com o objetivo de me tornar um desenvolvedor full stack, ampliando meus conhecimentos tanto no front-end quanto no back-end.</p>
                </div>

            </div>

            <div id='projetos' className='PaiProjetos'><h2>Projetos</h2>
                <div className='grid'>
                    <div className='projetos'>
                        <a href="https://werthercrisley.github.io/Sitedelivery/" target='_blanck'>
                            <img src={projeto} />
                            <h3>Site Delivery</h3>
                            <p>Esse projeto foi feito usando html css e java script, com o objetivo de ser u site de delivery, simples e eficaz!!</p>
                        </a>
                    </div>

                    <div className='projetos'>
                        <a href="https://werthercrisley.github.io/C-pia-mercado-livre/" target='_blanck'>
                            <img src={projeto2} />
                            <h3>Cópia do Mercado Livre</h3>
                            <p>Esse projeto foi feito usando html css e java script junto de reacs</p></a>
                    </div>


                    <div className='projetos'>
                        <a href="https://werthercrisley.github.io/MeutopJogos/" target='_blanck'>
                            <img src={projeto3} />
                            <h3>Meu Top Jogos</h3>
                            <p>Esse projeto foi feito usando html css e java script junto de reacs</p></a>
                    </div>
                </div>

            </div>

            <div className='Contato'></div>
            <footer><p>© Todos os direitos reservados</p><p>Werther Crisley</p></footer>



        </div >

    )
}
export default Home 