import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './pages/principal';
import Sobre from './pages/sobre';
import Notfound from './pages/NotFound';
import Perfil from './pages/perfil';
import Inicio from './pages/inicio';
import Detalhes from './pages/detalhes';
import Contato from './pages/contato';
import Filme from './pages/filmes';

function app (){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perfil/:nome" element={<Perfil />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/filme/:filme" element={<Filme />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
)
}

export default app;