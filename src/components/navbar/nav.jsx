import './nav.css'

function Nav() {

    return (

        <div className='header'><ul>
            <li><a className='homee' href='#Home'>Home</a></li>
            <li><a className='sobreminn' href='#sobremin'>Sobre min</a></li>
            <li><a className='projetoo' href='#projetos'>Projetos</a></li>
            <li><Link className='link' to="/contato"><a>Contato</a></Link></li>
        </ul></div>

    )
}

export default Nav