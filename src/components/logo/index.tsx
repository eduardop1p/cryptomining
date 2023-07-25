import Link from 'next/link';
import Image from 'next/image';

import styles from './styled.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles['container-logo']}>
      <Image
        src="/assets/imgs/btc.png"
        alt="logo-icon"
        width={40}
        height={40}
      />
      <h1>Crypto</h1>
      <h1>Mining</h1>
    </Link>
  );
}
