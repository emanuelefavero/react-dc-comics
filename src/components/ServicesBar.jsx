import digitalComicsImg from '../assets/img/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/img/buy-comics-merchandise.png';
import comicShopLocatorImg from '../assets/img/buy-comics-shop-locator.png';
import subscriptionImg from '../assets/img/buy-comics-subscriptions.png';
import powerVisaImg from '../assets/img/buy-dc-power-visa.svg';
import './ServicesBar.css';

const services = [
  { label: 'Digital Comics', href: '#', icon: digitalComicsImg },
  { label: 'DC Merchandise', href: '#', icon: merchandiseImg },
  { label: 'Subscription', href: '#', icon: subscriptionImg },
  { label: 'Comic Shop Locator', href: '#', icon: comicShopLocatorImg },
  { label: 'DC Power Visa', href: '#', icon: powerVisaImg },
];

export const ServicesBar = () => (
  <section className='services'>
    <div className='container'>
      <nav aria-label='DC services'>
        <ul>
          {services.map(({ label, href, icon }) => (
            <li key={label}>
              <a href={href}>
                <img src={icon} alt='' draggable='false' />
                <span className='uppercase'>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);
