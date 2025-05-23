import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // テーマは自由に選べます
import "./ArticleDetail.css";


interface Article {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  file: string;
}

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string | null>(null);
  
  useEffect(() => {
    const existingLink = document.getElementById("hljs-theme") as HTMLLinkElement | null;
    const newHref = isDarkMode
      ? "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.css"
      : "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.css";

    if (existingLink) {
      existingLink.href = newHref;
    } else {
      const link = document.createElement("link");
      link.id = "hljs-theme";
      link.rel = "stylesheet";
      link.href = newHref;
      document.head.appendChild(link);
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (content) {
      hljs.highlightAll();
      document.querySelectorAll("pre code").forEach((block) => {
        const code = block.textContent || "";
        const pre = block.parentElement;
        if(pre){
          const wrapper = document.createElement("div");
          wrapper.className = "code-block-wrapper";
          pre.parentElement?.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
          const button = document.createElement("button");
          button.textContent = "Copy";
          button.className = "copy-button";
          button.addEventListener("click", () => {
            navigator.clipboard.writeText(code).then(() => {
              button.textContent = "Copied";
              setTimeout(() => {
                button.textContent = "Copy";
              }, 2000);
            })
          })
          wrapper.appendChild(button);
          const filenameAttr = block.getAttribute("filename");
          if(filenameAttr){
            const filenameDiv = document.createElement("div");
            filenameDiv.className = "filename";
            filenameDiv.textContent = filenameAttr;
            wrapper.appendChild(filenameDiv);
          }
        }
      });
      document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("/articles/")) {
            e.preventDefault();
            navigate(href);
          }
        });
      });
    }
  }, [content, isDarkMode, navigate]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((categories) => {
        const categoryIds = categories.map((c: { id: string }) => c.id);

        return Promise.all(
          categoryIds.map((category: string) =>
            fetch(`/data/${category}.json`)
              .then((res) => res.json())
              .catch(() => [])
          )
        );
      })
      .then((allArticles) => {
        const foundArticle = allArticles.flat().find((item: Article) => item.id === id);
        if (foundArticle) {
          setArticle(foundArticle);

          fetch(foundArticle.file)
            .then((res) => res.text())
            .then((html) => setContent(html));
        }
      });
  }, [id]);

  if (!article || !content) {
    return (
      <div className="container mt-5 pt-5 text-center">
        記事が見つかりませんでした。
      </div>
    );
  }

  return (
    <div className={`container ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h1 className="text-center mb-4">{article.title}</h1>
      <h4 className="text-center mb-4">{article.date}</h4>
      {article.image && (
        <div className="text-center mb-4">
          <img src={article.image} alt={article.title} className="img-fluid rounded" style={{ maxHeight: "400px" }} />
        </div>
      )}
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );

}

export default ArticleDetail;
