import { Button } from '@/components/ui/Button';
import { comics } from '@/data/comics';
import { ComicCard } from './ComicCard';
import './Comics.css';

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
