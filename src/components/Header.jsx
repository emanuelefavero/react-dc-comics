import logoImg from '@/assets/img/dc-logo.png';
import { navLinks } from '@/data/navigation';
import { cx } from '@/lib/utils';
import './Header.css';

const Logo = () => (
  <a href='#' className='logo' aria-label='DC Comics'>
    <img src={logoImg} alt='' width={80} height={80} draggable='false' />
  </a>
);

const NavLink = ({ link }) =>
  link && (
    <a
      href={link.href}
      aria-current={link.isActive ? 'page' : undefined} // current page
      className={cx('uppercase text-xs font-bold', link.isActive && 'active')}
    >
      {link.label}
    </a>
  );

const Navbar = ({ links }) =>
  links.length > 0 && (
    <nav className='navbar' aria-label='Main navigation'>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );

export const Header = () => (
  <header className='header'>
    <div className='container'>
      <Logo />
      <Navbar links={navLinks} />
    </div>
  </header>
);
