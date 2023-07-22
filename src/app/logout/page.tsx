'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const redirect = useRouter();

  const handleClick = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/logout`);
      redirect.push('/login');
    } catch {
      alert('error logout');
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
}
