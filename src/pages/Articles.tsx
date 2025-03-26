import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import "./Articles.css";

function Articles() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [articles, setArticles] = useState<{ id: number; title: string; description: string; image: string }[]>([]);

  // 記事カテゴリ取得
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setSelectedCategory(data[0].id);
      });
  }, []);

  // 記事データ取得
  useEffect(() => {
    if (selectedCategory) {
      fetch(`/data/${selectedCategory}.json`)
        .then((res) => res.json())
        .then((data) => setArticles(data));
    }
  }, [selectedCategory]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">記事一覧</h1>
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={selectedCategory === category.id ? "active" : ""}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} category={selectedCategory!} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
