import styles from './FullGNB.module.css';

interface FullGNBHocItemProps {
  menu: any;
}
const FullGNBHocItem = ({ menu }: FullGNBHocItemProps) => {
  // menu에 child가 있을때
  if (typeof menu.child !== 'undefined') {
    return (
      <li>
        <span>{menu.name}</span>
        <ul className={styles.subMenu}>
          {menu.child.map((submenu: any, index: number) => (
            <FullGNBHocItem key={`SubMenu-${index}`} menu={submenu} />
          ))}
        </ul>
      </li>
    );
  }

  // menu에 child가 없을때
  return <li>{menu.name}</li>;
};

export default FullGNBHocItem;
