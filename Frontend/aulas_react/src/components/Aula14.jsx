import { estilos } from "../style/Estilos"
import { Link, useNavigate } from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate();
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr />
            <h3>Navegação com Link</h3>
            <Link to='/'>Página inicial</Link>
            <br />
            <Link to='/sobre'>Página Sobre</Link>
            <br />
            <Link to='/yvhvtcfgvy'>Página não encontrada</Link>
            <br />
            <h3>Navegação com programação utilizando useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Sobre</button>
            <hr />

            <h3>Rotas dinâmicas / Rotas com Parâmetros (useParams)</h3> 
            <button onClick={() => navigate('/perfil/Douglas')}>Perfil do Douglas</button>
            <button onClick={() => navigate('/perfil/Barreto')}>Perfil do Barreto</button>
            <hr />
            <button onClick={() => navigate('/inicio')}>Início</button>
            <button onClick={() => navigate('/inicio')}>Início</button>
            <button onClick={() => navigate('/filme/O Poderoso Chefão')}>Filme: O Poderoso Chefão</button>


        </div>
    )
}

export default Aula14