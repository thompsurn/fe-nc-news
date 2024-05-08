import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://thompsurn-be-nc-news.onrender.com/api",
});

export function getAllArticles() {
  return ncNewsAPI.get("/articles", {});
}
