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

      </div>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>My Works</h1>
          <p className={styles.description}>A Collection of My Creations</p>
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
