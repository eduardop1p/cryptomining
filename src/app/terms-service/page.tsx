import { cookies } from 'next/headers';
import Image from 'next/image';

import styles from './styles.module.css';
import Header from '@/components/header';
import FooterWihtAuth from '@/components/footerWithAuth';
import Footer from '@/components/footerRegisterLogin';

export default async function TermsService() {
  const isAuth = cookies().has('token');
  const token = cookies().get('token')?.value;
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/get-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'get',
    // cache: 'no-cache',
  });
  const { user } = await data.json();

  return (
    <>
      <Header
        fixedNav={true}
        registerOrLogin={false}
        bigPadding={true}
        isAuth={isAuth}
        userName={user.name}
      />
      <div className={styles['container-terms-service']}>
        <Image
          src="/assets/imgs/bg-frag.png"
          alt="bg-frag"
          fill={true}
          sizes="100%"
        />
        <div className={styles['terms-service']}>
          <h1>Last Updated: May 06 2023</h1>
          <h2>Purchase Instructions</h2>
          <div>
            The mining contract becomes effective immediately after the payment
            is confirmed. All purchases are final and non-refundable unless
            otherwise required by applicable law or specific offer.
          </div>
          <h2> Calculate the output</h2>
          <div>
            For the calculation of mining revenue, please refer to the planning
            contract.
          </div>
          <h2>Equipment maintenance</h2>
          <div>
            After the start of the contract, the platform (CRYPTO MINING) will
            carry out daily maintenance of the equipment. The contract price
            includes the maintenance fee, and the platform (CRYPTO MINING) will
            not charge additional maintenance fees.
          </div>
          <h2>Output settlement</h2>
          <div>
            After the contract starts, mining will start automatically, and the
            system will settle the income for you every day. You can withdraw
            your income at any time, and the minimum withdrawal amount is
            0.0005BTC.
          </div>
          <h2>Risk warning</h2>
          <div>
            (1) Policy risk: Due to the formulation or modification of laws,
            regulations and normative documents for digital assets in various
            countries, digital asset transactions may be suspended or banned at
            any time. You must understand and agree that due to the formulation
            or modification of national laws, regulations and regulatory
            documents, the transaction of digital assets is suspended or
            prohibited, and all economic losses caused by this will be borne by
            you.
          </div>
          <div>
            (2) Force majeure risk: The platform is responsible for information
            network equipment maintenance, information network connection
            failures, computer, communication or other system failures, power
            failures, hacker attacks, weather reasons, accidents, strikes, labor
            disputes, riots, uprisings, etc. , riots, lack of productivity or
            means of production, fires, floods, storms, explosions, wars,
            reasons of banks or other partners, digital asset market collapse,
            government actions, orders from judicial or administrative agencies,
            other things beyond the control of this platform or The platform
            does not assume any responsibility for the failure or delay of
            service caused by the actions beyond the control of the platform or
            the reasons of the third party, as well as your losses.
          </div>
          <div style={{ textAlign: 'center' }}>
            The platform reserves the right of final interpretation of the terms
            of this contract.
          </div>
        </div>
        <div className={styles['footer-container']}>
          {isAuth ? <FooterWihtAuth /> : <Footer />}
        </div>
      </div>
    </>
  );
}
