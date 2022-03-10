import Link from 'next/link';

import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Link href='/'>
        <h1 className={headerStyles.header_title}>
          bistro lee
          <span className={headerStyles.header_title_jp}>‘ビストロリー’</span>
        </h1>
      </Link>
      <p>Sushi & Bar</p>
    </div>
  );
};

export default Header;
