import { ButtonLink, buttonLinkVariants } from '@/components/ui/ButtonLink';
import { socialLinks } from '@/data/footer';
import './FooterCTA.css';

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

export const FooterCTA = () => (
  <div className='footer-cta'>
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
