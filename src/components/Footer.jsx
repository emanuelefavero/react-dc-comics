import footerLogo from '../assets/img/dc-logo-bg.png';
import { linkGroups, socialLinks } from '../data/footer.js';
import './Footer.css';

const { dcComics, shop, dc, sites } = linkGroups;
const columns = [
  { id: 1, groups: [dcComics, shop] },
  { id: 2, groups: [dc] },
  { id: 3, groups: [sites] },
];

const Hero = () => (
  <div className='hero'>
    <div className='container'>
      <nav className='links' aria-label='Footer navigation'>
        <ul className='columns'>
          {columns.map((column) => (
            <li key={column.id} className='column'>
              {column.groups.map((group) => (
                <div key={group.id} className='link-group'>
                  <span className='uppercase text-lg font-bold'>
                    {group.title}
                  </span>

                  <ul>
                    {group.links.map((link) => (
                      <li key={link.id}>
                        <a href={link.href} className='link text-xs'>
                          {link.label}
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
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className='social-link'>
                  <img
                    src={link.icon}
                    alt={`Follow us on ${link.label}`}
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
