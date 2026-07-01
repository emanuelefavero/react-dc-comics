import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => {
  const isDev = import.meta.env.DEV;
  const [isDebug, setIsDebug] = useState(false);

  return (
    <div className={isDebug ? 'debug' : ''}>
      {/* Debug Toggle Button (dev only) */}
      {isDev && (
        <button
          onClick={() => setIsDebug(!isDebug)}
          className={`debug-toggle ${isDebug ? 'active' : ''}`}
        >
          Debug
        </button>
      )}

      {/* Content */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
