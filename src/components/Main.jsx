import { Comics } from './Comics';
import './Main.css';
import { ServicesBar } from './ServicesBar';

const Jumbotron = () => <div className='jumbotron' />;

export const Main = () => (
  <main className='main'>
    <Jumbotron />
    <Comics />
    <ServicesBar />
  </main>
);
