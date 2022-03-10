// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Data } from './data';

export function getMenu() {
  const menuList = Data;
  return menuList;
}

export function filterMenu(menuType) {
  let filteredMenu = getMenu().filter((type) => type.category === menuType);
  return filteredMenu;
}
