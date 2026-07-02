import footerLogo from '../assets/img/dc-logo-bg.png';
import facebookIcon from '../assets/img/footer-facebook.png';
import periscopeIcon from '../assets/img/footer-periscope.png';
import pinterestIcon from '../assets/img/footer-pinterest.png';
import twitterIcon from '../assets/img/footer-twitter.png';
import youtubeIcon from '../assets/img/footer-youtube.png';
import './Footer.css';

const footerLinkGroups = {
  dcComics: {
    id: 1,
    title: 'DC Comics',
    links: [
      { id: 1, label: 'Characters', href: '#' },
      { id: 2, label: 'Comics', href: '#' },
      { id: 3, label: 'Movies', href: '#' },
      { id: 4, label: 'TV', href: '#' },
      { id: 5, label: 'Games', href: '#' },
      { id: 6, label: 'Videos', href: '#' },
      { id: 7, label: 'News', href: '#' },
    ],
  },
  shop: {
    id: 2,
    title: 'Shop',
    links: [
      { id: 1, label: 'Shop DC', href: '#' },
      { id: 2, label: 'Shop DC Collectibles', href: '#' },
    ],
  },
  dc: {
    id: 3,
    title: 'DC',
    links: [
      { id: 1, label: 'Terms Of Use', href: '#' },
      { id: 2, label: 'Privacy policy (New)', href: '#' },
      { id: 3, label: 'Ad Choices', href: '#' },
      { id: 4, label: 'Advertising', href: '#' },
      { id: 5, label: 'Jobs', href: '#' },
      { id: 6, label: 'Subscriptions', href: '#' },
      { id: 7, label: 'Talent Workshops', href: '#' },
      { id: 8, label: 'CPSC Certificates', href: '#' },
      { id: 9, label: 'Ratings', href: '#' },
      { id: 10, label: 'Shop Help', href: '#' },
      { id: 11, label: 'Contact Us', href: '#' },
    ],
  },
  sites: {
    id: 4,
    title: 'Sites',
    links: [
      { id: 1, label: 'DC', href: '#' },
      { id: 2, label: 'MAD Magazine', href: '#' },
      { id: 3, label: 'DC Kids', href: '#' },
      { id: 4, label: 'DC Universe', href: '#' },
      { id: 5, label: 'DC Power Visa', href: '#' },
    ],
  },
};

const { dcComics, shop, dc, sites } = footerLinkGroups;
const footerColumns = [
  { id: 1, groups: [dcComics, shop] },
  { id: 2, groups: [dc] },
  { id: 3, groups: [sites] },
];

const socialLinks = [
  { id: 1, label: 'Facebook', href: '#', icon: facebookIcon },
  { id: 2, label: 'Twitter', href: '#', icon: twitterIcon },
  { id: 3, label: 'YouTube', href: '#', icon: youtubeIcon },
  { id: 4, label: 'Pinterest', href: '#', icon: pinterestIcon },
  { id: 5, label: 'Periscope', href: '#', icon: periscopeIcon },
];

const Hero = () => (
  <div className='hero'>
    <div className='container'>
      <nav className='links' aria-label='Footer navigation'>
        <ul className='columns'>
          {footerColumns.map(({ id, groups }) => (
            <li key={id} className='column'>
              {groups.map(({ id, title, links }) => (
                <div key={id} className='link-group'>
                  <h2 className='uppercase text-lg'>{title}</h2>

                  <ul>
                    {links.map(({ id, label, href }) => (
                      <li key={id}>
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
            {socialLinks.map(({ id, label, href, icon }) => (
              <li key={id}>
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
