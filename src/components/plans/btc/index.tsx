import Image from 'next/image';

import Purcharse from '../pucharse';

import styles from '../styles.module.css';

export default function BTC() {
  return (
    <>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>0% off</span>
        <h1 className={styles['plan-title']}>STARTER</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$12</span>
            {' / '}
            <span className={styles['plan-time']}>365 Day</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$12</small> / 365 Day
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining : 0.0000185BTC ≈ $0.66</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.000559 BTC ≈ $16.77</span>
          <Purcharse />
        </div>
        <button>Buy now</button>
      </div>
      <div></div>
      <div></div>
    </>
  );
}
