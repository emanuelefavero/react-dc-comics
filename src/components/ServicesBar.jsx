import { services } from '@/data/services';
import './ServicesBar.css';

export const ServicesBar = () => (
  <section className='services'>
    <div className='container'>
      <nav aria-label='DC services'>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <a href={service.href}>
                <img src={service.icon} alt='' draggable='false' />
                <span className='uppercase'>{service.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);
