import Image from 'next/image';

import Purcharse from '../pucharse';
import BuyNow from '../buyNow';

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
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$12</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.0000185BTC ≈ $0.66</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.000559 BTC ≈ $16.77</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={12} planTitle="STARTER" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>0% off</span>
        <h1 className={styles['plan-title']}>NEW BEGINNER</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$100</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$100</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.000122 BTC ≈ $3.66</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.00366 BTC ≈ $109.8</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={100} planTitle="NEW BEGINNER" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>20% off</span>
        <h1 className={styles['plan-title']}>BASIC</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$320</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$400</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.00121 BTC ≈ $36.3</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.0364 BTC ≈ $1092</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={400} planTitle="BASIC" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>30% off</span>
        <h1 className={styles['plan-title']}>ECONOMY</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$728</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$1040</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.00336 BTC ≈ $100.8</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.1007 BTC ≈ $3021</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={728} planTitle="ECONOMY" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>40% off</span>
        <h1 className={styles['plan-title']}>STANDART</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$2400</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$4000</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.014 BTC ≈ $420</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 0.42 BTC ≈ $12600</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={2400} planTitle="STANDART" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>50% off</span>
        <h1 className={styles['plan-title']}>SENIOR</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$6500</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$13000</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.0616 BTC ≈ $1848</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 1.848 BTC ≈ $55440</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={6500} planTitle="SENIOR" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>55% off</span>
        <h1 className={styles['plan-title']}>ADVANCED</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$12600</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$28000</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.13 BTC ≈ $3900</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 3.92 BTC ≈ $117600</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={12600} planTitle="ADVANCED" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>60% off</span>
        <h1 className={styles['plan-title']}>LUXURIOUS</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$32000</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$80000</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 0.364 BTC ≈ $10920</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 10.92 BTC ≈ $327600</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={32000} planTitle="LUXURIOUS" />
      </div>
      <div className={styles.container}>
        <Image src="/assets/imgs/btc.png" alt="btc" height={115} width={115} />
        <span className={styles['plan-discount']}>70% off</span>
        <h1 className={styles['plan-title']}>OPTIMUM</h1>
        <div className={styles['price']}>
          <div>
            <span className={styles['plan-price']}>$63000</span>
            {' / '}
            <span className={styles['plan-time']}>365 Days</span>
          </div>
          <span className={styles['plan-before-price']}>
            <small>$210000</small> / 365 Days
          </span>
        </div>
        <div className={styles['plan-info']}>
          <span>Contract duration: 365 days</span>
          <span>Daily mining: 1.0266 BTC ≈ $30798</span>
          <span>Hardware: Antminer S19j</span>
          <span>Monthly mining: 30.8 BTC ≈ $924000</span>
          <Purcharse />
        </div>
        <BuyNow planPrice={63000} planTitle="OPTIMUM" />
      </div>
    </>
  );
}
