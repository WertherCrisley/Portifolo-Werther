import './contato.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

function Contato() {


    const [erro, setErro] = useState(false);

    function enviarmensagem(event) {

        event.preventDefault()
        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        const number = '5585988800053';

        if (!nome || !mensagem) {
            setErro(true);

            setTimeout(() => {
                setErro(false);
            }, 3000);

            return;
        }

        const texto = `Olá, me chamo ${nome}, ${mensagem}`;
        const textoformatado = encodeURIComponent(texto);
        const mensagemfinal = `https://wa.me/${number}?text=${textoformatado}`
        window.open(mensagemfinal, '_blank')
    }


    return (

        <div className='body'>
            <div className='main'>
                {erro && (
                    <div className="alert-erro">
                        ⚠️ Preencha todos os campos!
                    </div>
                )}
                <nav>
                    <h1>Contatos</h1>
                    <Link to="/"><h4><i className="bi bi-arrow-return-left"></i> Voltar</h4></Link>
                </nav>

                <div className='container'>

                    <div className='enviar'><h2>Entre em contato</h2>
                        <input id='nome' type="text" placeholder='Seu nome!' />
                        <textarea id='mensagem' placeholder='Sua Mensagem!' />
                        <button onClick={enviarmensagem}>Enviar Whatsapp</button>
                    </div>

                    <div className='redes'><h2>Redes e Contatos</h2>
                        <p><span className='linkedinn'><a href="https://www.linkedin.com/in/werther-crisley-58aba73b9/" target='_blank' rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a></span>https://www.linkedin.com/in/werther-crisley-58aba73b9/</p>
                        <p><span className='git'><a href="https://github.com/WertherCrisley" target='_blank' rel="noopener noreferrer"><i class="bi bi-github"></i></a></span>https://github.com/WertherCrisley</p>
                        <p><span className='zapp'><a href="https://wa.me/5585988800053" target='_blank' rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a></span>+55 85 988800053</p>
                        <p><span className='ggmail'><a href="mailto:werthercr7@gmail.com" target='_blank' rel="noopener noreferrer"><i class="bi bi-envelope-at-fill"></i></a></span>wertercr7@gmail.com</p>

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