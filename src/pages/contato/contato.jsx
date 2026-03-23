import './contato.css'
import { Link } from 'react-router-dom'

function Contato() {

    return (

        <div className='body'>
            <div className='main'>
                <nav>
                    <h1>Contatos</h1>
                    <Link to="/"><h4><i class="bi bi-arrow-return-left"></i> Voltar</h4></Link>
                </nav>

                <div className='container'>

                    <div className='enviar'><h2>Entre em contato</h2>
                        <input type="text" placeholder='Seu nome!' />
                        <textarea placeholder='Sua Mensagem!' />
                        <button>Enviar Whatsapp</button>
                    </div>

                    <div className='redes'><h2>Redes e Contatos</h2>
                        <p><span className='linkedinn'><a href="#" target='_blanck'><i class="bi bi-linkedin"></i></a></span> Link do linkeidn</p>
                        <p><span className='git'><a href="#" target='_blanck'><i class="bi bi-github"></i></a></span> Link do guthub</p>
                        <p><span className='zapp'><a href="#" target='_blanck'><i class="bi bi-whatsapp"></i></a></span>telefone</p>
                        <p><span className='ggmail'><a href="#" target='_blanck'><i class="bi bi-envelope-at-fill"></i></a></span>Email</p>

                    </div>
                </div>
                <div className='voltar'><Link to="/"><h3><i class="bi bi-arrow-return-left"></i> Voltar</h3></Link></div>
            </div>
            <div className='Contato'></div>
            <footer><p>© Todos os direitos reservados</p><p>Werther Crisley</p></footer>

        </div >

    )

}
export default Contato