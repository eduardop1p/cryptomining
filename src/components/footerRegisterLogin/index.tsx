import Image from 'next/image';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/imgs/bg-tech.png"
        alt="account"
        fill={true}
        sizes="100%"
      />
      <Image
        src="/assets/imgs/shape2.png"
        alt="account"
        fill={true}
        sizes="100%"
      />
      <span>
        Copyright © 2021-{new Date().getFullYear()} Cripto Mining All Right
        Reserved
      </span>
    </footer>
  );
}
