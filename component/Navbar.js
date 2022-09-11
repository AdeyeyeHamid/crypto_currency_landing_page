import React, {useState}from 'react'
import './NavbarStyles.css'
import {Link} from 'react-router-dom'
import ReactLogo from './logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            
            <Link className='crappo' to='/'><img className='logo' src={ReactLogo} alt="React Logo" /></Link>
            <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                <li>
                    <Link to='/'>Product</Link>
                </li>
                <li>
                    <Link to='/'>Features</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                <Link to='/' className='btnx'>Register</Link>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes  size={20} style={{color: '#fff'}} />):  <FaBars size={20} style={{color: '#fff'}} /> }
               
            </div>

        </div>
    )
}
export default Navbar