import './Navbar.css'
import { Link } from 'react-router-dom';

function NavBar(){
  return(
    <header className='navbar'>
        <div className= 'navbar-conteudo'>
            <Link to='/' className='navbar-logo'>📈 Renda Fixa</Link>

            <div className='navbar-links'>
                <Link to='/' className='navbar-link'>🧮 Calculadora</Link>
                <Link to='/' className='navbar-link'>ℹ️ Sobre</Link>
            </div>
        </div>
    </header>
  )
}

export default NavBar;