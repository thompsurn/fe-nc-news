import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { getAllArticles } from "../utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return <ArticleList articles={articles} isLoading={isLoading} />;
};

export default Home;



