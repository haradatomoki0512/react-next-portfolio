type Props = {
  article?: {
    title: string;
  };
}

export default function Article({ article }: Props) {
  return <div>{article?.title || "No title available"}</div>;
}
