import { Link } from "react-router-dom";
import "./ArticleCard.css";

type ArticleProps = {
  article: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
};

function ArticleCard({ article }: ArticleProps){
  return (
    <Link to={article.link} className="article-card">
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </Link>
  );
}

export default ArticleCard
