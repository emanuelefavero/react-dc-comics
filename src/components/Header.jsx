import logoImg from '../assets/img/dc-logo.png';
import './Header.css';

const navLinks = [
  { label: 'Characters', href: '#' },
  { label: 'Comics', href: '#', isActive: true },
  { label: 'Movies', href: '#' },
  { label: 'TV', href: '#' },
  { label: 'Games', href: '#' },
  { label: 'Collectibles', href: '#' },
  { label: 'Videos', href: '#' },
  { label: 'Fans', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Shop', href: '#' },
];

const Logo = () => (
  <a href='#' className='logo'>
    <img src={logoImg} alt='DC Logo' width={80} height={80} />
  </a>
);

const Navbar = () => (
  <nav className='navbar' aria-label='Main navigation'>
    <ul>
      {navLinks.map((navLink) => (
        <li key={navLink.label}>
          <a
            href={navLink.href}
            className={`uppercase text-xs font-bold ${navLink.isActive ? 'active' : ''}`}
          >
            {navLink.label}
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
