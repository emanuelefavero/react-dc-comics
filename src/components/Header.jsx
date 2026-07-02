import logoImg from '../assets/img/dc-logo.png';
import './Header.css';

const navLinks = [
  { id: 1, label: 'Characters', href: '#' },
  { id: 2, label: 'Comics', href: '#', isActive: true },
  { id: 3, label: 'Movies', href: '#' },
  { id: 4, label: 'TV', href: '#' },
  { id: 5, label: 'Games', href: '#' },
  { id: 6, label: 'Collectibles', href: '#' },
  { id: 7, label: 'Videos', href: '#' },
  { id: 8, label: 'Fans', href: '#' },
  { id: 9, label: 'News', href: '#' },
  { id: 10, label: 'Shop', href: '#' },
];

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
