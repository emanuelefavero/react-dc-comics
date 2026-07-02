import footerLogo from '../assets/img/dc-logo-bg.png';
import facebookIcon from '../assets/img/footer-facebook.png';
import periscopeIcon from '../assets/img/footer-periscope.png';
import pinterestIcon from '../assets/img/footer-pinterest.png';
import twitterIcon from '../assets/img/footer-twitter.png';
import youtubeIcon from '../assets/img/footer-youtube.png';
import './Footer.css';

const footerLinkGroups = {
  dcComics: {
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
  shop: {
    title: 'Shop',
    links: [
      { label: 'Shop DC', href: '#' },
      { label: 'Shop DC Collectibles', href: '#' },
    ],
  },
  dc: {
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
  sites: {
    title: 'Sites',
    links: [
      { label: 'DC', href: '#' },
      { label: 'MAD Magazine', href: '#' },
      { label: 'DC Kids', href: '#' },
      { label: 'DC Universe', href: '#' },
      { label: 'DC Power Visa', href: '#' },
    ],
  },
};

const { dcComics, shop, dc, sites } = footerLinkGroups;
const footerColumns = [
  // Column 1
  [dcComics, shop],
  // Column 2
  [dc],
  // Column 3
  [sites],
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: facebookIcon },
  { label: 'Twitter', href: '#', icon: twitterIcon },
  { label: 'YouTube', href: '#', icon: youtubeIcon },
  { label: 'Pinterest', href: '#', icon: pinterestIcon },
  { label: 'Periscope', href: '#', icon: periscopeIcon },
];

const Hero = () => (
  <div className='hero'>
    <div className='container'>
      <nav className='links' aria-label='Footer navigation'>
        <ul className='columns'>
          {footerColumns.map((column, index) => (
            <li key={index} className='column'>
              {column.map(({ title, links }) => (
                <div key={title} className='link-group'>
                  <h2 className='uppercase text-lg'>{title}</h2>

                  <ul>
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a href={href} className='link text-xs'>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </nav>

      <img
        className='logo'
        src={footerLogo}
        alt=''
        width={563}
        height={560}
        draggable='false'
      />
    </div>
  </div>
);

const CTA = () => (
  <div className='cta'>
    <div className='container'>
      <a href='#' className='signup uppercase text-lg font-semibold'>
        Sign-Up Now!
      </a>

      <div className='socials'>
        <span className='title uppercase text-xl font-bold'>Follow Us</span>

        <nav aria-label='Social links' className='social-links'>
          <ul>
            {socialLinks.map(({ label, href, icon }) => (
              <li key={label}>
                <a href={href} className='social-link'>
                  <img
                    src={icon}
                    alt={`Follow us on ${label}`}
                    draggable='false'
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <footer className='footer'>
    <Hero />
    <CTA />
  </footer>
);
