import {Link, useParams} from "react-router-dom"

function Filme (){
const {filme} = useParams();

    return(
        <div>
            <h1>Este é o filme {filme}</h1>
            <Link to="/">Voltar para a página principal</Link>
        </div>
    )
}

export default Filme;