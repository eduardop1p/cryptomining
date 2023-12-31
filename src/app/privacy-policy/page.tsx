import { cookies } from 'next/headers';
import Image from 'next/image';

import styles from './styles.module.css';
import Header from '@/components/header';
import FooterWihtAuth from '@/components/footerWithAuth';
import Footer from '@/components/footerRegisterLogin';

export default async function PrivacyPolicy() {
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
      <div className={styles['container-privacy-policy']}>
        <Image
          src="/assets/imgs/bg-frag.png"
          alt="bg-frag"
          fill={true}
          sizes="100%"
        />
        <div className={styles['privacy-policy']}>
          <h1>Last Updated: May 06 2023</h1>
          <h2>Privacy Policy</h2>
          <div>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from s
            (the “Site”).
          </div>
          <h2>PERSONAL INFORMATION WE COLLECT</h2>
          <div>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information”. We
            collect Device Information using the following technologies:
            <ul>
              <li>
                - “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit{' '}
              </li>
              <li>
                - “Log files” track actions occurring on the Site, and collect
                data including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                - “Web beacons”, “tags”, and “pixels” are electronic files used
                to record information about how you browse the Site.
              </li>
            </ul>
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers, email address, and phone number. We
            refer to this information as “Order Information”. When we talk about
            “Personal Information” in this Privacy Policy, we are talking both
            about Device Information and Order Information.
          </div>
          <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
          <div>
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
            <ul>
              <li>- Communicate with you;</li>
              <li> - Screen our orders for potential risk or fraud;</li>
              <li>
                - When in line with the preferences you have shared with us,
                provide you with information or advertising relating to our
                products or services.
              </li>
            </ul>
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </div>
          <h2>SHARING YOUR PERSONAL INFORMATION</h2>
          <div>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we use
            Shopify to power our online store--you can read more about how
            Shopify uses your Personal Information here. We also use Google
            Analytics to help us understand how our customers use the Site --
            you can read more about how Google uses your Personal Information
            You can opt out of targeted advertising by using the links below:
            Additionally, you can opt out of some of these services by visiting
            the Digital Advertising Alliance’s opt-out portal at:
          </div>
          <h2>DO NOT TRACK</h2>
          <div>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </div>
          <h2>YOUR RIGHTS</h2>
          <div>
            If you are a European resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below. Additionally, if you are a European resident we
            note that we are processing your information in order to fulfill
            contracts we might have with you (for example if you make an order
            through the Site), or otherwise to pursue our legitimate business
            interests listed above. Additionally, please note that your
            information will be transferred outside of Europe, including to
            Canada and the United States.
          </div>
          <h2>DATA RETENTION</h2>
          <div>
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.{' '}
          </div>
          <h2>CHANGES</h2>
          <div>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </div>
          <h2> CONTACT US</h2>
          <div>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e‑mail at support@cryptomining.email.
          </div>
        </div>
        <div className={styles['footer-container']}>
          {isAuth ? <FooterWihtAuth /> : <Footer />}
        </div>
      </div>
    </>
  );
}
