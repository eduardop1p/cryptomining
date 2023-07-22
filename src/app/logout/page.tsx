'use client';

export default function Logout() {
  const handleClick = () => {
    localStorage.removeItem('auth');
  };

  return <button onClick={handleClick}>Logout</button>;
}
