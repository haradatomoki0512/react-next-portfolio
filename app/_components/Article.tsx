export default function Article({ article }) {
  return <div>{article?.title || "No title available"}</div>;
}
