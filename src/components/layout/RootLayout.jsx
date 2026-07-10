import { Footer } from './Footer';
import { Header } from './Header';

export const RootLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
