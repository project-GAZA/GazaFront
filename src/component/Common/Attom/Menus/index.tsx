import React from 'react';
import styles from './index.module.scss';

interface MenuProp {
  name: string;
  click: () => void;
}

interface MenusProps {
  menus: MenuProp[];
}

const Menu = ({ name, click }) => {
  return (
    <button onClick={click} className={styles.menuWrapper}>
      {name}
    </button>
  );
};

const Menus = ({ menus }: MenusProps) => {
  return (
    <div className={styles.layout}>
      {menus.map(v => (
        <Menu key={v.name} name={v.name} click={v.click} />
      ))}
    </div>
  );
};

export default Menus;
