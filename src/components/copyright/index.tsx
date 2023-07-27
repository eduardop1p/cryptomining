import styles from './styles.module.css';

export default function Copyright() {
  return (
    <div className={styles.container}>
      <h2>
        Copyright © {new Date().getFullYear()} Crypto Mining All Right Reserved
      </h2>
    </div>
  );
}
