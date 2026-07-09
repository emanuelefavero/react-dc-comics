import { services } from '@/data/services';
import './ServicesBar.css';

const ServiceLink = ({ service }) =>
  service && (
    <a href={service.href} className='service-link'>
      <img src={service.icon} alt='' draggable='false' />
      <span className='uppercase'>{service.label}</span>
    </a>
  );

export const ServicesBar = () => (
  <section className='services'>
    <div className='container'>
      <nav aria-label='DC services'>
        <ul className='service-list'>
          {services.map((service) => (
            <li key={service.id}>
              <ServiceLink service={service} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);
