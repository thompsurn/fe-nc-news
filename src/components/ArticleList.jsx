import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://thompsurn-be-nc-news.onrender.com/api/articles')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div className="article-list">
      <h2>All Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/articles/${article._id}`}>
              <h3>{article.title}</h3>
            </Link>
            <p>Author: {article.author}</p>
            <p>Date: {new Date(article.date).toLocaleDateString()}</p>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
