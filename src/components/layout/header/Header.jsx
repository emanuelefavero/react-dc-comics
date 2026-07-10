import { navLinks } from '@/data/navigation';
import './Header.css';
import { Jumbotron } from './Jumbotron';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

export const Header = () => (
  <header className='header'>
    <div className='container'>
      <Logo />
      <Navbar links={navLinks} />
    </div>
    <Jumbotron />
  </header>
);
