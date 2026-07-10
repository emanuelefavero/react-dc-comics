import { Button } from '@/components/ui/Button';
import { comics } from '@/data/comics';
import './Comics.css';

const ComicCard = ({ comic }) =>
  comic?.series && (
    <a href='#' className='comic-card'>
      <img src={comic.thumb} alt={comic.series} />
      <h2 className='label uppercase text-sm font-semibold'>{comic.series}</h2>
    </a>
  );

export const Comics = () => (
  <section className='comics'>
    <div className='container'>
      <h1 className='title uppercase text-2xl'>Current Series</h1>

      <ul className='list'>
        {comics.map((comic) => (
          <li key={comic.id}>
            <ComicCard comic={comic} />
          </li>
        ))}
      </ul>

      <Button className='load-more'>Load More</Button>
    </div>
  </section>
);
