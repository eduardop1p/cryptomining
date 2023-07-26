import Image from 'next/image';

import Purcharse from '../pucharse';
import BuyNow from '../buyNow';

import styles from '../styles.module.css';

export default function DOG() {
  return (
    <>
      <div className={styles.container}>
        <Image src="/assets/imgs/dog.png" alt="dog" height={115} width={115} />
        <span className={styles['plan-discount']}>0% off</span>
        <h1 className={styles['plan-title']}>BASIC</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$50</span>
            {' / '}
            <span className={styles['plan-time']}>3 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$50</small> / 3 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>3 Days Return：$65.12</span>
          <span>Contract duration: 3 days</span>
          <span>Daily mining: 50.4 DOGE $5.04</span>
          <span>Planned rate of return：30.2%</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={50} planTitle="BASIC" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/dog.png" alt="dog" height={115} width={115} />
        <span className={styles['plan-discount']}>20.02% off</span>
        <h1 className={styles['plan-title']}>ECONOMY</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$1350</span>
            {' / '}
            <span className={styles['plan-time']}>21 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$1688</small> / 21 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>21 Days Return：$2000</span>
          <span>Contract duration: 21 days</span>
          <span>Daily mining: 386.8 DOGE ≈ $38.68</span>
          <span>Planned rate of return：148.1%</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={1350} planTitle="ECONOMY" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/dog.png" alt="dog" height={115} width={115} />
        <span className={styles['plan-discount']}>50% off</span>
        <h1 className={styles['plan-title']}>SENIOR</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$3200</span>
            {' / '}
            <span className={styles['plan-time']}>36 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$6400</small> / 36 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>36 Days Return：$5700</span>
          <span>Contract duration: 36 days</span>
          <span>Daily mining: 694.5 DOGE ≈ $69.45</span>
          <span>Planned rate of return：178%</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={3200} planTitle="SENIOR" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/dog.png" alt="dog" height={115} width={115} />
        <span className={styles['plan-discount']}>80% off</span>
        <h1 className={styles['plan-title']}>ADVANCED</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$5600</span>
            {' / '}
            <span className={styles['plan-time']}>45 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$28000</small> / 45 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>45 Days Return：$11200</span>
          <span>Contract duration: 45 days</span>
          <span>Daily mining: 1244.45 DOGE ≈ $124.45</span>
          <span>Planned rate of return：200%</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={5600} planTitle="ADVANCED" />
      </div>
    </>
  );
}
