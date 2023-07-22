import Image from 'next/image';

import styles from './styles.module.css';

import Header from '@/components/header';
import Footer from '@/components/footerRegisterLogin';
import FormPasswordReset from '@/components/formPasswordReset';

export default function PasswordReset() {
  return (
    <>
      <Header fixedNav={false} registerOrLogin={true} />
      <main className={styles.container}>
        <section className={styles['form-thumb']}>
          <FormPasswordReset />
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
