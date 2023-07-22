import Image from 'next/image';
import {
  FaHeadset,
  FaConnectdevelop,
  FaUserSecret,
  FaCoins,
  FaCreditCard,
  FaGlobe,
} from 'react-icons/fa';
import Link from 'next/link';

import Header from '@/components/header';
import Slider from '@/components/slider';
import AskedQuestions from '@/components/askedQuestions';
import Insigns from '@/components/insigns';
import Logo from '@/components/logo';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-section s-1">
        <div className="shape">
          <Image
            src="/assets/imgs/shape.png"
            alt="shape"
            width={1000}
            height={800}
            priority={true}
          />
        </div>

        <div className="sub-container">
          <section className="default-s-1">
            <div className="start-up">
              <div className="simple-secure">
                <span className="title-get-start-10-usd">
                  <Image
                    src="/assets/imgs/icon.png"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  START CLOUD MINING SIGN UP TO GET $10
                </span>
                <h1 className="title">
                  CriptoMining is <span>Simple & Secure</span> Way to Enter
                  Crypto Mining.
                </h1>
                <p className="paragraph">
                  Looking for easy to use Cripto Mining site. Trusted By 90,621
                  Bitcoin Miners.
                </p>
                <Link className="get-start" href="/login">
                  Start Mining Now
                </Link>
              </div>
              <Image
                src="/assets/imgs/62667371b0bf21650881393.png"
                alt="frack-img"
                width={450}
                height={390}
                className="frack-img"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="container-section s-2">
        <section className="thumb-info">
          <Image
            src="/assets/imgs/626651bb269801650872763.png"
            alt="thumb"
            width={750}
            height={590}
            className="thumb"
          />
          <div className="info">
            <span className="entry-title">KNOW ABOUT US</span>
            <h1 className="title">
              We provide the best services to our miners{' '}
              <span>Be connected with us and get profited.</span>
            </h1>
            <p className="paragraph">
              Cripto Mining is one of the leading cryptocurrency mining
              platforms, No need to purchase hardware devices, manage devices,
              offering cryptocurrency mining capacities in every range - for
              newcomers. Our mission is to make acquiring cryptocurrencies easy
              and fast for everyone.
            </p>
            <Link className="get-start" href="/login">
              Start Mining
            </Link>
          </div>
        </section>

        <div className="shape1">
          <Image
            src="/assets/imgs/shape2.png"
            fill={true}
            sizes="100%"
            alt="shape2"
          />
        </div>
        <div className="shape2">
          <Image
            src="/assets/svgs/shape-svg.svg"
            fill={true}
            sizes="100%"
            alt="shape2"
          />
        </div>
      </div>
      <div className="container-section s-3">
        <div className="sub-container">
          <section className="features">
            <div className="features-info">
              <span className="entry-title">CRIPTOMINING FEATURE</span>
              <h1 className="title">
                CriptoMining Offers the <span>Top Most Features</span>
              </h1>
              <p className="paragraph">
                Cripto Mining is a cryptocurrency cloud mining platform, we have
                advanced mining cryptocurrency equipment, site, maintenance
                facilities, we have cheap clean electricity energy, if you want
                cryptocurrency mining, we are a good choice, Mining
                cryptocurrencies without any equipment!
              </p>
            </div>
            <div className="features-card">
              <div className="card card-1">
                <div className="col col-1">
                  <div className="feature-item-icon">
                    <Image
                      src="/assets/imgs/626652db18da81650873051.png"
                      alt="btc"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h2 className="title-digital-currency">Digital Currency</h2>
                  <p className="paragraph-currency">
                    Currency is a mediu {`it's`} money, issued by a government
                    and generally accepted at its face value as a method of
                    payment.
                  </p>
                </div>

                <div className="col col-2">
                  <div className="feature-item-icon">
                    <Image
                      src="/assets/imgs/626652e8bde601650873064.png"
                      alt="btc"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h2 className="title-digital-currency">Mining Service</h2>
                  <p className="paragraph-currency">
                    Currency is a medium of exchange for goods and services.
                    {`it's`} money and at its face value as a method of payment.
                  </p>
                </div>
              </div>
              <div className="col col-3">
                <div className="feature-item-icon">
                  <Image
                    src="/assets/imgs/626652fa98de01650873082.png"
                    alt="btc"
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className="title-digital-currency">
                  Encryption Techniques
                </h2>
                <p className="paragraph-currency">
                  Currency is a medium of exchange for goods and services.
                  {`it's`} money, issued by a government and generally
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container-section s-4">
        <div className="sub-container">
          <section className="services">
            <span className="entry-title">SERVICES</span>
            <h1 className="title">
              Why <span>Choose Us</span>
            </h1>
            <div className="grid">
              <div className="grid-info">
                <FaHeadset />
                <div className="grid-title-info">
                  <h2>24/7 Support</h2>
                  <p>
                    We are ready to answer all your questions and advise you
                    24/7. Feel free to reach us anytime.
                  </p>
                </div>
              </div>
              <div className="grid-info">
                <FaConnectdevelop />
                <div className="grid-title-info">
                  <h2>Instant Connect</h2>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="grid-info">
                <FaUserSecret />
                <div className="grid-title-info">
                  <h2>Easy Withdrawal</h2>
                  <p>
                    Our withdrawal process takes only 24 hours. We are highly
                    transparent about transactions.
                  </p>
                </div>
              </div>
              <div className="grid-info">
                <FaCoins />
                <div className="grid-title-info">
                  <h2>Detailed Statistics</h2>
                  <p>
                    We make detailed statistics of your transaction, also you
                    will get all the mining logs.
                  </p>
                </div>
              </div>
              <div className="grid-info">
                <FaCreditCard />
                <div className="grid-title-info">
                  <h2>Cloud Mining</h2>
                  <p>
                    We provide the best cloud mining service and give rewards to
                    our miners on a daily basis.
                  </p>
                </div>
              </div>
              <div className="grid-info">
                <FaGlobe />
                <div className="grid-title-info">
                  <h2>Data Protection</h2>
                  <p>
                    We constantly work on improving our system and the level of
                    our security to minimize any risks.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container-section s-5">
        <Image
          className="shape-s-5"
          src="/assets/svgs/shape-svg.svg"
          alt="shapes-s-5"
          width={770}
          height={400}
        />
        <div className="sub-container">
          <section className="clients">
            <h2 className="entry-title">CLIENT SAY</h2>
            <h1 className="title">
              Our CriptoMining <span>Users Say</span>
            </h1>
            <Slider />
          </section>
        </div>
      </div>
      <div className="container-section s-6">
        <Image
          className="shape-s-6"
          src="/assets/imgs/shape2.png"
          alt="shape-s-6"
          fill={true}
          sizes="100%"
        />
        <div className="frequently-asked">
          <h2 className="entry-title">FREQUENTLY ASKED QUESTIONS</h2>
          <h1 className="title">
            <span>Asked Questions</span> by Users
          </h1>
        </div>
        <div className="sub-container">
          <section className="questions">
            <AskedQuestions />
            <Image
              className="shape-questions"
              src="/assets/imgs/62665ccf339421650875599.png"
              alt="shape-questions"
              width={750}
              height={465}
            />
          </section>
        </div>
      </div>
      <div className="container-section s-7">
        <Image
          src="/assets/imgs/bg-frag.png"
          alt="bg-frag"
          fill={true}
          sizes="100%"
        />
        <div className="sub-container">
          <section>
            <Insigns />
          </section>
        </div>
      </div>
      <div className="container-section s-8">
        <Image
          className="shape-1-s-8"
          src="/assets/imgs/bg-tech.png"
          alt="bg-tech"
          fill={true}
          sizes="100%"
        />
        <Image
          className="shape-2-s-8"
          src="/assets/imgs/shape2.png"
          alt="bg-tech"
          fill={true}
          sizes="100%"
        />
        <footer className="sub-container">
          <section className="grid-s-8">
            <div>
              <Logo />
              <p className="footer-text-links">
                We are one of the leading cryptocurrency mining platforms,
                offering cryptocurrency mining capacities in every range - for
                newcomers. Our mission is to make acquiring cryptocurrencies
                easy and fast for everyone!
              </p>
            </div>
            <div>
              <h1 className="title-footer">Quick Links</h1>
              <Link className="footer-text-links" href="/">
                Home
              </Link>
              <Link className="footer-text-links" href="/login">
                Login
              </Link>
              <Link className="footer-text-links" href="/register">
                Sign Up
              </Link>
            </div>
            <div>
              <h1 className="title-footer">Useful Links</h1>
              <Link className="footer-text-links" href="/usage-policy">
                Usage Policy
              </Link>
              <Link className="footer-text-links" href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
            <div>
              <h1 className="title-footer">Contact Info</h1>
              <Link
                className="footer-text-links"
                href="mailto:support@criptomining.email"
              >
                Email: support@criptomining.email
              </Link>
              <span className="footer-text-links">
                46 Leighton Road, London, England, W13 9EH
              </span>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
