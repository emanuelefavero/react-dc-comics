import { services } from '../data/services.js';
import './ServicesBar.css';

export const ServicesBar = () => (
  <section className='services'>
    <div className='container'>
      <nav aria-label='DC services'>
        <ul>
          {services.map(({ id, label, href, icon }) => (
            <li key={id}>
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
