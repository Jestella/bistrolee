import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Data } from './api/data';
import { Buttons } from './api/data';
import { getMenu, filterMenu } from './api/hello';
import menuStyles from '../styles/Menus.module.scss';

export default function Menus() {
  const [filteredMenu, setFilteredMenu] = useState(null);
  useEffect(() => {
    setFilteredMenu(getMenu());
  }, []);

  function handleMenu(e) {
    let typeMenu = e.target.value;
    typeMenu !== 'all'
      ? setFilteredMenu(filterMenu(typeMenu))
      : setFilteredMenu(getMenu());
  }

  return (
    <div className={menuStyles.container}>
      <h1>Menus</h1>
      {Buttons &&
        Buttons.map((item, index) => (
          <>
            <button
              key={index}
              value={item.value}
              onMouseEnter={handleMenu}
              className={menuStyles.menu_button}
            >
              {item.name}
            </button>
          </>
        ))}

      {filteredMenu &&
        filteredMenu.map((item) => (
          <Card key={item.id}>
            <div className={menuStyles.card_container}>
              <div className={menuStyles.card}>
                <h3>{item.itemName}</h3>
                <p>{item.itemInfo}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

// for API
// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       posts: data,
//     },
//   };
// }
