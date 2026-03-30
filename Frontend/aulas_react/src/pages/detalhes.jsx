import {Link} from "react-router-dom"

function sobre (){
    return(
        <div>
            <h1>Mais informações</h1>
            <Link to="/contato">Página de contato</Link>
        </div>
    )
}

export default sobre;