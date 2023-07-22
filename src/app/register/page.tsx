import Image from 'next/image';

import Header from '@/components/header';
import FormRegister from '@/components/formRegister';
import Footer from '@/components/footerRegisterLogin';

import styles from './styles.module.css';

export default function Register() {
  return (
    <>
      <Header fixedNav={false} registerOrLogin={true} />
      <main className={styles.container}>
        <section className={styles['form-thumb']}>
          <FormRegister />
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
