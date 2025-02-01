import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink/index';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk?: string }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk }).catch(notFound);

  return (
    <div className={styles.main}>
      <Article article={data} />
      <ButtonLink href="/news">
        Back to News List
      </ButtonLink>
    </div>
  );
}
