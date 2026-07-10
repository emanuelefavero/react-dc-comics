import { cx } from '@/lib/utils';
import './Navbar.css';

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

export const Navbar = ({ links = [] }) =>
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
