import axios from "axios";

const api = axios.create({
  baseURL: "http://185.219.111.33:23704/News-app-BE-api",
});

const getArticles = () => {
  return api.get("/articles").then((res) => res.data.articles);
};

const getArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => res.data.article);
};

const getCommentsByArticleByID = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data.comments || []);
};

const postCommentByArticleID = (article_id, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => res.data.comment);
};

const deleteCommentsByArticleByID = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => res.data);
};

const patchArticleVotes = (article_id, vote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((res) => res.data.article);
};

const getUsers = () => {
  return api.get("/users").then((res) => res.data.users);
};

const getTopics = () => {
  return api.get("/topics").then((res) => res.data.topics);
};

export {
  getTopics,
  getArticles,
  getArticleByID,
  getCommentsByArticleByID,
  patchArticleVotes,
  getUsers,
  postCommentByArticleID,
  deleteCommentsByArticleByID,
};

