import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetail.css";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  file: string;
}

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    // 記事データを取得
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((categories) => {
        const categoryIds = categories.map((c: { id: string }) => c.id);

        // 各カテゴリの JSON を順に取得し、該当記事を探す
        Promise.all(categoryIds.map((category:string) =>
          fetch(`/data/${category}.json`)
            .then((res) => res.json())
            .catch(() => [])
        )).then((allArticles) => {
          const foundArticle = allArticles.flat().find((item: Article) => item.id === id);
          if (foundArticle) {
            setArticle(foundArticle);

            // 記事のHTMLを取得
            fetch(foundArticle.file)
              .then((res) => res.text())
              .then((html) => setContent(html));
          }
        });
      });
  }, [id]);

  if (!article || !content) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div className="article-detail">
      <h1 className="article-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArticleDetail;
