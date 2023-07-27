import Link from 'next/link';

import Logo from '../logo';
import Copyright from '../copyright';

import styles from './styled.module.css';

export default function FooterWihtAuth() {
  return (
    <div className={styles.container}>
      <footer className="grid-s-8">
        <div>
          <Logo />
        </div>
        <div>
          <h1 className="title-footer">Quick Links</h1>
          <Link className="footer-text-links" href="/about">
            About
          </Link>
          <Link className="footer-text-links" href="/contact">
            Contact
          </Link>
          <Link className="footer-text-links" href="/user/plans">
            Plans
          </Link>
          <Link className="footer-text-links" href="/user/pucharse">
            Pucharse
          </Link>
        </div>
        <div>
          <h1 className="title-footer">Other Links</h1>
          <Link className="footer-text-links" href="/usage-policy">
            Usage Policy
          </Link>
          <Link className="footer-text-links" href="/cookie-policy">
            Cookie Policy
          </Link>
          <Link className="footer-text-links" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer-text-links" href="/terms-service">
            Terms of Service
          </Link>
        </div>
      </footer>
      <Copyright />
    </div>
  );
}
