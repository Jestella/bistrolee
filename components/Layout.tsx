import layoutStyles from '../styles/Layout.module.scss';
import Meta from './Meta';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={layoutStyles.container}>
        <Header />
        <Nav />
        <main className={layoutStyles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
