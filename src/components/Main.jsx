import './Main.css';

const Content = () => (
  <section className='content'>
    <div className='container'>Content</div>
  </section>
);

const Services = () => (
  <section className='services'>
    <div className='container'>Services</div>
  </section>
);

export const Main = () => (
  <main className='main'>
    <Content />
    <Services />
  </main>
);
