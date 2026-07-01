import './Footer.css';

const footerLinks = [
  {
    title: 'DC Comics',
    links: [
      { label: 'Characters', href: '#' },
      { label: 'Comics', href: '#' },
      { label: 'Movies', href: '#' },
      { label: 'TV', href: '#' },
      { label: 'Games', href: '#' },
      { label: 'Videos', href: '#' },
      { label: 'News', href: '#' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Shop DC', href: '#' },
      { label: 'Shop DC Collectibles', href: '#' },
    ],
  },
  {
    title: 'DC',
    links: [
      { label: 'Terms Of Use', href: '#' },
      { label: 'Privacy policy (New)', href: '#' },
      { label: 'Ad Choices', href: '#' },
      { label: 'Advertising', href: '#' },
      { label: 'Jobs', href: '#' },
      { label: 'Subscriptions', href: '#' },
      { label: 'Talent Workshops', href: '#' },
      { label: 'CPSC Certificates', href: '#' },
      { label: 'Ratings', href: '#' },
      { label: 'Shop Help', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Sites',
    links: [
      { label: 'DC', href: '#' },
      { label: 'MAD Magazine', href: '#' },
      { label: 'DC Kids', href: '#' },
      { label: 'DC Universe', href: '#' },
      { label: 'DC Power Visa', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Periscope', href: '#' },
];

const Hero = () => (
  <div className='hero'>
    <div className='container'></div>
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
