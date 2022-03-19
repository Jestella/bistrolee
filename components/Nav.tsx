import Link from 'next/link';

import navStyles from '../styles/Nav.module.scss';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/about'>ABOUT</Link>
        </li>
        <li>
          <Link href='/reservations'>RESERVATIONS</Link>
        </li>
        <li>
          <Link href='/menus'>MENUS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
