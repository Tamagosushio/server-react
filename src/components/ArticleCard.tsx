import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

type ArticleProps = {
  article: {
    id: number;
    date: string;
    title: string;
    description: string;
    image: string;
  };
  category: string;
};

function ArticleCard({ article, category }: ArticleProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`card h-100 ${isDarkMode ? "text-white" : "text-dark"}`}
      style={{
        backgroundColor: isDarkMode ? "#111" : "",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Link to={`/articles/${category}/${article.id}`} className="text-decoration-none">
        <div
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            backgroundColor: isDarkMode ? "#222" : "#eee", // ここを切り替え
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s",
          }}
        >
          <img
            src={article.image}
            className="card-img-top"
            alt={article.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{article.title}</h5>
          <h6 className="card-subtitle">{article.date}</h6>
          <p className="card-text">{article.description}</p>  
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
