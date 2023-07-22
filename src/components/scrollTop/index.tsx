'use client';

import { FaChevronUp } from 'react-icons/fa';

import styles from './styles.module.css';

export default function ChevronUp({
  obseverHeader,
}: {
  obseverHeader: boolean;
}) {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      // eslint-disable-next-line
      className={`${styles.container} ${!obseverHeader ? styles['is-visible-scroll-top'] : ''}`}
      onClick={handleClick}
    >
      <FaChevronUp />
    </div>
  );
}
