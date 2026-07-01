import './Footer.css';

const Hero = () => (
  <div className='hero'>
    <div className='container'>Footer Hero</div>
  </div>
);

const CTA = () => (
  <div className='cta'>
    <div className='container'>Footer CTA</div>
  </div>
);

export const Footer = () => (
  <footer className='footer'>
    <Hero />
    <CTA />
  </footer>
);
