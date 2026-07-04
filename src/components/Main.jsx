import { comics } from '../data/comics.js';
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
              <img src={comic.thumb} alt={comic.series} />
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
