import { comics } from '../data/comics.js';
import { cx } from '../lib/utils.js';
import './Main.css';
import { ServicesBar } from './ServicesBar';

const Jumbotron = () => <div className='jumbotron' />;

const Comics = () => (
  <section className='comics'>
    <div className='container'>
      <h1 className='title uppercase text-2xl'>Current Series</h1>

      <ul className='list'>
        {comics.map((comic) => (
          <li key={comic.id}>
            <a href='#' className='card'>
              <div className='cover'>
                <img
                  src={comic.thumb}
                  alt={comic.series}
                  // If thumb img has white borders, crop it
                  className={cx(comic.thumb_needs_crop && 'cropped')}
                />
              </div>
              <h2 className='label uppercase text-base font-semibold'>
                {comic.series}
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const Main = () => (
  <main className='main'>
    <Jumbotron />
    <Comics />
    <ServicesBar />
  </main>
);
