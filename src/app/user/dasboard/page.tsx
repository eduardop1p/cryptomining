import Header from '@/components/header';

import styles from './styles.module.css';

export default function Dasboard() {
  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <Header fixedNav={false} registerOrLogin={false} bigPadding={true} />
      </div>
    </div>
  );
}
