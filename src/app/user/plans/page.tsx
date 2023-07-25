import styles from './styles.module.css';

import BTCETHDOG from '@/components/BTCETHDOG';

export default function Plans() {
  return (
    <main className={styles.container}>
      <section className={styles['plan-info']}>
        <div className={styles['the-plan']}>
          The plan can be purchased with a $10 bonus
        </div>
        <div className={styles.info}>
          <p>
            One of the advantages of our miners is that you can get your main
            invest money less than{' '}
            <span className={styles['blue-text']}>10 days</span> and double your
            money in <span className={styles['blue-text']}> 20 days</span>
          </p>
          <p>
            For example if you activate{' '}
            <span className={styles['red-text']}>Basic</span> miner with{' '}
            <span className={styles['red-text']}>728 USD</span>, after{' '}
            <span className={styles['blue-text']}>20 days</span>
            you can withdraw{' '}
            <span className={styles['red-text']}>
              0.00302 X 30 = 0.0906 BTC
            </span>
          </p>
          <p>
            {'Don’t'} lose time and active one of the Bitcoin miners today, keep
            in remind that our discounts are limited so hurry up.
          </p>
          <span className={styles['red-text']}>
            You can have the fastest bitcoin miner in 5 minutes:
          </span>
          <ol className={styles['ol-info']}>
            <li>Choose one of the below miners</li>
            <li>
              Click on{' '}
              <span className={styles['blue-text']}>{'"Buy Now"'}</span> button
              and pay the miner price
            </li>
            <li>
              Your miner is launched and adds bitcoin to your balance every
              second {'(until 1 year)'}
            </li>
            <li>
              Your bitcoin increase every minute and you can withdraw it or buy
              a new bigger miner
            </li>
          </ol>
        </div>
      </section>
      <BTCETHDOG />
    </main>
  );
}
