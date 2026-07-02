import logoImg from '../assets/img/dc-logo.png';
import { navLinks } from '../data/navigation.js';
import './Header.css';

const Logo = () => (
  <a href='#' className='logo'>
    <img
      src={logoImg}
      alt='DC Comics'
      width={80}
      height={80}
      draggable='false'
    />
  </a>
);

const Navbar = () => (
  <nav className='navbar' aria-label='Main navigation'>
    <ul>
      {navLinks.map(({ id, label, href, isActive }) => (
        <li key={id}>
          <a
            href={href}
            className={`uppercase text-xs font-bold ${isActive ? 'active' : ''}`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const Header = () => (
  <header className='header'>
    <div className='container'>
      <Logo />
      <Navbar />
    </div>
  </header>
);
