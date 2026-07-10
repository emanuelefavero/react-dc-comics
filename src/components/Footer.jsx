import footerLogo from '@/assets/img/dc-logo-bg.png';
import { ButtonLink, buttonLinkVariants } from '@/components/ui/ButtonLink';
import { linkGroups, socialLinks } from '@/data/footer';
import './Footer.css';

const FooterLink = ({ link }) =>
  link && (
    <a href={link.href} className='link text-xs'>
      {link.label}
    </a>
  );

const FooterLinkGroup = ({ group }) =>
  group && (
    <li className='link-group'>
      <span className='uppercase text-lg font-bold'>{group.title}</span>

      <ul>
        {group.links.map((link) => (
          <li key={link.id}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </li>
  );

const FooterNavigation = ({ groups = [] }) =>
  groups.length > 0 && (
    <nav className='links' aria-label='Footer navigation'>
      <ul className='link-groups'>
        {groups.map((group) => (
          <FooterLinkGroup group={group} key={group.id} />
        ))}
      </ul>
    </nav>
  );

const FooterLogo = ({ src, width = 560, height = 560 }) =>
  src && (
    <img
      className='logo'
      src={src}
      alt=''
      width={width}
      height={height}
      draggable='false'
    />
  );

const FooterHero = () => (
  <div className='hero'>
    <div className='container'>
      <FooterNavigation groups={linkGroups} />
      <FooterLogo src={footerLogo} />
    </div>
  </div>
);

const FooterSocialLink = ({ link }) =>
  link && (
    <a href={link.href} className='social-link'>
      <img
        src={link.icon}
        alt={`Follow us on ${link.label}`}
        draggable='false'
      />
    </a>
  );

const FooterSocialLinks = ({ links = [] }) =>
  links.length > 0 && (
    <nav aria-label='Social links' className='social-links'>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <FooterSocialLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );

const FooterCTA = () => (
  <div className='cta'>
    <div className='container'>
      <ButtonLink
        href='#'
        variant={buttonLinkVariants.variant.outline}
        size={buttonLinkVariants.size.md}
        className='signup'
      >
        Sign-Up Now!
      </ButtonLink>

      <div className='socials'>
        <span className='title uppercase text-xl font-bold'>Follow Us</span>
        <FooterSocialLinks links={socialLinks} />
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <footer className='footer'>
    <FooterHero />
    <FooterCTA />
  </footer>
);
