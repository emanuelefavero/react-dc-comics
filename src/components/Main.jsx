import './Main.css';
import { ServicesBar } from './ServicesBar';

const Jumbotron = () => <div className='jumbotron' />;

const Comics = () => (
  <section className='comics'>
    <div className='container'>
      <h1 className='uppercase'>Current Series</h1>
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
