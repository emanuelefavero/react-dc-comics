import logoImg from '../assets/img/dc-logo.png';
import { navLinks } from '../data/navigation.js';
import { cx } from '../lib/utils.js';
import './Header.css';

const Logo = () => (
  <a href='#' className='logo' aria-label='DC Comics'>
    <img src={logoImg} alt='' width={80} height={80} draggable='false' />
  </a>
);

const Navbar = () => (
  <nav className='navbar' aria-label='Main navigation'>
    <ul>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            aria-current={link.isActive ? 'page' : undefined} // current page
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
