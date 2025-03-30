import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";

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
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">記事一覧</h1>
      <ul className="nav nav-tabs justify-content-center mb-4">
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <button
              className={`nav-link ${selectedCategory === category.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        {articles.map((article) => (
          <div key={article.id} className="col d-flex justify-content-center">
            <ArticleCard key={article.id} article={article} category={selectedCategory!} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
