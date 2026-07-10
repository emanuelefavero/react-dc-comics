import logoImg from '@/assets/img/dc-logo.png';
import './Logo.css';

export const Logo = () => (
  <a href='#' className='logo' aria-label='DC Comics'>
    <img src={logoImg} alt='' width={80} height={80} draggable='false' />
  </a>
);
