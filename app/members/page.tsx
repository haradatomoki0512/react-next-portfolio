import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';
import AboutMe from '@/app/members/AboutMe';

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });

  return (
    <div className={styles.container}>
      <AboutMe />
    </div>
  );
}
