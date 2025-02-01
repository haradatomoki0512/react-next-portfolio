import styles from "./page.module.css";
import Image from "next/image";

import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      {/* 画像をページ上部に追加 */}
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={400} /* 幅 */
          height={550} /* 高さ */
          priority
        />
      </div>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Tomoki Harada</h1>
          <p className={styles.description}>White Hat Hacker Specialization</p>
        </div>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
