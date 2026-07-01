import digitalComicsImg from '../assets/img/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/img/buy-comics-merchandise.png';
import comicShopLocatorImg from '../assets/img/buy-comics-shop-locator.png';
import subscriptionImg from '../assets/img/buy-comics-subscriptions.png';
import powerVisaImg from '../assets/img/buy-dc-power-visa.svg';
import './Main.css';

const services = [
  { label: 'Digital Comics', href: '#', icon: digitalComicsImg },
  { label: 'DC Merchandise', href: '#', icon: merchandiseImg },
  { label: 'Subscription', href: '#', icon: subscriptionImg },
  { label: 'Comic Shop Locator', href: '#', icon: comicShopLocatorImg },
  { label: 'DC Power Visa', href: '#', icon: powerVisaImg },
];

const Content = () => (
  <section className='content'>
    <div className='container'>Content</div>
  </section>
);

const Services = () => (
  <section className='services'>
    <div className='container'>Services</div>
  </section>
);

export const Main = () => (
  <main className='main'>
    <Content />
    <Services />
  </main>
);
