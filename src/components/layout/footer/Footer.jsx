import './Footer.css';
import { FooterCTA } from './FooterCTA';
import { FooterHero } from './FooterHero';
import { ServicesBar } from './ServicesBar';

export const Footer = () => (
  <footer className='footer'>
    <ServicesBar />
    <FooterHero />
    <FooterCTA />
  </footer>
);
