import './Main.css';
import { ServicesBar } from './ServicesBar';

const Content = () => (
  <section className='content'>
    <div className='container'>
      <h1 className='text-3xl'>
        {'-->'} Content goes here {'<--'}
      </h1>
    </div>
  </section>
);

export const Main = () => (
  <main className='main'>
    <Content />
    <ServicesBar />
  </main>
);
