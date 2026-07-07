import { comics } from '@/data/comics.js';
import './Comics.css';

export const Comics = () => (
  <section className='comics'>
    <div className='container'>
      <h1 className='title uppercase text-2xl'>Current Series</h1>

      <ul className='list'>
        {comics.map((comic) => (
          <li key={comic.id}>
            <a href='#' className='card'>
              <img src={comic.thumb} alt={comic.series} />
              <h2 className='label uppercase text-sm font-semibold'>
                {comic.series}
              </h2>
            </a>
          </li>
        ))}
      </ul>

      <button type='button' className='button uppercase text-xs font-bold'>
        Load More
      </button>
    </div>
  </section>
);
