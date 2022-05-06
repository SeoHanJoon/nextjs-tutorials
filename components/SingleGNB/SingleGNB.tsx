import styles from './SingleGNB.module.css';

const SingleGNB = () => {
  return (
    <ul className={styles.gnb}>
      <li>
        <a href="#">GNB1</a>
        <ul>
          <li>
            <a href="#">subMenu01</a>
          </li>
          <li>
            <a href="#">subMenu02</a>
          </li>
          <li>
            <a href="#">subMenu03</a>
          </li>
          <li>
            <a href="#">subMenu04</a>
          </li>
          <li>
            <a href="#">subMenu05</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">GNB2</a>
        <ul>
          <li>
            <a href="#">subMenu11</a>
          </li>
          <li>
            <a href="#">subMenu12</a>
          </li>
          <li>
            <a href="#">subMenu13</a>
          </li>
          <li>
            <a href="#">subMenu14</a>
          </li>
          <li>
            <a href="#">subMenu15</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">GNB3</a>
        <ul>
          <li>
            <a href="#">subMenu21</a>
          </li>
          <li>
            <a href="#">subMenu22</a>
          </li>
          <li>
            <a href="#">subMenu23</a>
          </li>
          <li>
            <a href="#">subMenu24</a>
          </li>
          <li>
            <a href="#">subMenu25</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">GNB4</a>
        <ul>
          <li>
            <a href="#">subMenu31</a>
          </li>
          <li>
            <a href="#">subMenu32</a>
          </li>
          <li>
            <a href="#">subMenu33</a>
          </li>
          <li>
            <a href="#">subMenu34</a>
          </li>
          <li>
            <a href="#">subMenu35</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SingleGNB;
