import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink/index';
import styles from './page.module.css';

type Props = {
  params: { slug: string };
  searchParams: { dk?: string };
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params; // paramsをawait
  const { dk } = await searchParams; // searchParamsをawait

  const data = await getNewsDetail(slug, { draftKey: dk }).catch(notFound);

  return (
    <main className={styles.main}>
      <Article article={data} />
      <ButtonLink href="/news">
        Back to News List
      </ButtonLink>
    </main>
  );
}
