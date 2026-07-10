import footerLogo from '@/assets/img/dc-logo-bg.png';
import { linkGroups } from '@/data/footer';
import './FooterHero.css';

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

export const FooterHero = () => (
  <div className='footer-hero'>
    <div className='container'>
      <FooterNavigation groups={linkGroups} />
      <FooterLogo src={footerLogo} />
    </div>
  </div>
);
