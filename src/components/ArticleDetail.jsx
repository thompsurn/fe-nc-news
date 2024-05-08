import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://thompsurn-be-nc-news.onrender.com/api/articles/${id}`)
      .then(response => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching article details:', error);
        setLoading(false);
      });

    axios.get(`https://thompsurn-be-nc-news.onrender.com/api/articles/${id}/comments`)
      .then(response => {
        setComments(response.data.comments);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Date: {new Date(article.date).toLocaleDateString()}</p>
      <p>{article.content}</p>
      
      <h3>Comments</h3>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default ArticleDetail;