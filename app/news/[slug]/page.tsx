import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params; // `params` を await する

  const data = await getNewsDetail(slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <main className={styles.main}>
      <Article article={data} />
      <ButtonLink href="/news" label="Back to News List" />
    </main>
  );
}
