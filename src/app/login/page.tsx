import Image from 'next/image';

import styles from './styles.module.css';

import Header from '@/components/header';
import Footer from '@/components/footerRegisterLogin';
import FormLogin from '@/components/formLogin';

export default function Login() {
  return (
    <>
      <Header fixedNav={false} registerOrLogin={true} />
      <main className={styles.container}>
        <section className={styles['form-thumb']}>
          <FormLogin />
          <div className={styles['img-wrap']}>
            <Image
              src="/assets/imgs/form_thumbs.png"
              width={700}
              height={600}
              alt="form_thumbs"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
