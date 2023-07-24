import axios from 'axios';
import { cookies } from 'next/headers';

import Header from '@/components/header';

import styles from './styles.module.css';

export default async function Dashboard() {
  const isAuth = cookies().has('token');
  const token = cookies().get('token')?.value;
  const {
    data: { user },
  } = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/get-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <Header
          fixedNav={false}
          registerOrLogin={false}
          bigPadding={true}
          isAuth={isAuth}
          userName={user.name}
        />
      </div>
    </div>
  );
}
