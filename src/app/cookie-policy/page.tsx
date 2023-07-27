import { cookies } from 'next/headers';
import Image from 'next/image';

import styles from './styles.module.css';
import Header from '@/components/header';
import FooterWihtAuth from '@/components/footerWithAuth';
import Footer from '@/components/footerRegisterLogin';

export default async function CookiePolicy() {
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
      <div className={styles['container-cookie-policy']}>
        <Image
          src="/assets/imgs/bg-frag.png"
          alt="bg-frag"
          fill={true}
          sizes="100%"
        />
        <div className={styles['cookie-policy']}>
          <h1>Last Updated: May 06 2023</h1>
          <h2>Privacy Policy</h2>
          <div>
            {'("us", "we", or "our")'} operates the website {'(the "Service")'}.
            This page informs you of our policies regarding the collection, use
            and disclosure of Personal Information when you use our Service. We
            will not use or share your information with anyone except as
            described in this Privacy Policy. We use your Personal Information
            for providing and improving the Service. By using the Service, you
            agree to the collection and use of information in accordance with
            this policy. Unless otherwise defined in this Privacy Policy, terms
            used in this Privacy Policy have the same meanings as in our terms
            and conditions.
          </div>
          <h2>Information Collection and Use</h2>
          <div>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to, your email address, name, phone number, postal
            address {'(“Personal Information”)'}.
          </div>
          <h2>Log Data</h2>
          <div>
            We collect information that your browser sends whenever you visit
            our Service {'(“Log Data”)'}. This Log Data may include information
            such as your computer’s Internet Protocol {'(“IP”)'} address,
            browser type, browser version, and the pages of our Service that you
            visit, the time and date of your visit, the time spent on those
            pages and other statistics. In addition, we may use third party
            services such as Google Analytics that collect, monitor and analyze
            this type of information in order to increase our Service’s
            functionality. These third party service providers have their own
            privacy policies addressing how they use such information.
          </div>
          <h2>Cookies</h2>
          <div>
            Cookies are files with small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            web site and stored on your computer’s hard drive. We use “cookies”
            to collect information. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, if you
            do not accept cookies, you may not be able to use some portions of
            our Service.
          </div>
          <h2>Service Providers</h2>
          <div>
            We may employ third party companies and individuals to facilitate
            our Service, to provide the Service on our behalf, to perform
            Service-related services or to assist us in analyzing how our
            Service is used. These third parties have access to your Personal
            Information only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </div>
          <h2>Compliance with Laws</h2>
          <div>
            We will disclose your Personal Information where required to do so
            by law or subpoena or if we believe that such action is necessary to
            comply with the law and the reasonable requests of law enforcement
            or to protect the security or integrity of our Service.
          </div>
          <h2>Security</h2>
          <div>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </div>
          <h2>International Transfer</h2>
          <div>
            Your information, including Personal Information, may be transferred
            to - and maintained on - computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ than those from your jurisdiction.
          </div>
          <h2>Links to Other Sites</h2>
          <div>
            Our Service may contain links to other sites that are not operated
            by us. If you click on a third party link, you will be directed to
            that third party’s site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over, and
            assume no responsibility for the content, privacy policies or
            practices of any third party sites or services.
          </div>
          <h2>Children’s Privacy</h2>
          <div>
            Our Service does not address anyone under the age of 13
            {'(“Children”)'}. We do not knowingly collect personally
            identifiable information from children under 13. If you are a parent
            or guardian and you are aware that your Children has provided us
            with Personal Information, please contact us. If we discover that a
            Children under 13 has provided us with Personal Information, we will
            delete such information from our servers immediately.
          </div>
          <h2>Changes to this Privacy Policy</h2>
          <div>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </div>
          <h2>Deleting Your Account</h2>
          <div>
            For security reasons, You’ll need to be able to log into your
            account or open a Support Ticket to request deletion. When you
            delete your account, your account and all your information will be
            permanently deleted, and you {"won't"} be able to retrieve your
            information. Go to Close your account plsease contact us.
          </div>
          <h2>Access, Changes, Updates Your Personal Information</h2>
          <div>
            You will, at any time have the right to access your Personal
            Information used by us upon your demand. Further, you are entitled
            that any incorrect Personal Information relating to you is corrected
            and you may also demand the cancellation or deletion of your
            Personal Information unless applicable law requires the safekeeping.
          </div>
          <h2>Credit Card Privacy Policy</h2>
          <div>
            All Credit Card and Electronic transactions are processed through
            payment gateway Visa, MasterCard. No information is collected and
            saved by us. All payments adhere to the standards set by PCI-DSS as
            managed by the PCI Security Standards Council.
          </div>
        </div>
        <div className={styles['footer-container']}>
          {isAuth ? <FooterWihtAuth /> : <Footer />}
        </div>
      </div>
    </>
  );
}
