import logoImg from '../assets/img/dc-logo.png';
import { navLinks } from '../data/navigation.js';
import { cx } from '../lib/utils.js';
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
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cx(
              'uppercase text-xs font-bold',
              link.isActive && 'active',
            )}
          >
            {link.label}
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
