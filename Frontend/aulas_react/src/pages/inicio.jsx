import {Link} from "react-router-dom"

function inicio (){
    
    return(
        <div>
            <h1>Bem-vindo!</h1>
            <Link to="/detalhes">Detalhes</Link>
        </div>
    )
}

export default inicio;