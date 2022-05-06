import styles from './FullGNB.module.css';
import FullGNBHocItem from './FullGNBHocItem';

interface FUllGNBHocProps {
  data: any;
}
const FullGNBHoc = ({ data }: FUllGNBHocProps) => {
  return (
    <ul className={styles.gnb}>
      {data.map((menu: any, index: number) => (
        <FullGNBHocItem key={`Menu-${index}`} menu={menu} />
      ))}
    </ul>
  );
};

export default FullGNBHoc;
