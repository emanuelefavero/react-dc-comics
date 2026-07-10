import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const RootLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
