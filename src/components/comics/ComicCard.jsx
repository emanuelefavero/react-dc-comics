import './ComicCard.css';

export const ComicCard = ({ comic }) =>
  comic?.series && (
    <a href='#' className='comic-card'>
      <img src={comic.thumb} alt={comic.series} />
      <h2 className='label uppercase text-sm font-semibold'>{comic.series}</h2>
    </a>
  );
