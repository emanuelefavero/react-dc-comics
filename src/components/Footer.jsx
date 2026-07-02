import footerLogo from '../assets/img/dc-logo-bg.png';
import { footerLinkGroups, socialLinks } from '../data/footer.js';
import './Footer.css';

const { dcComics, shop, dc, sites } = footerLinkGroups;
const footerColumns = [
  { id: 1, groups: [dcComics, shop] },
  { id: 2, groups: [dc] },
  { id: 3, groups: [sites] },
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
