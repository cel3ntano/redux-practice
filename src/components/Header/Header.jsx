import { Container } from 'components';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h3 className={styles.title}>Lesson 4 redux</h3>
        </nav>
      </Container>
    </header>
  );
};
