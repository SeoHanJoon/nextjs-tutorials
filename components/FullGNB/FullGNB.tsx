import styles from './FullGNB.module.css';

interface FUllGNBHocProps {
  data: any;
}

const FullGNB = ({ data }: FUllGNBHocProps) => {
  return (
    <ul className={styles.gnb}>
      {data.map((depth1: any) => (
        <li>
          <span>{depth1.name}</span>
          <ul className={styles.subMenu}>
            {depth1.child.map((depth2: any) => (
              <li>{depth2.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FullGNB;
