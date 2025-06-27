import axios from "axios";

const isLAN = window.location.hostname.startsWith("192.168.");
const baseURL = isLAN
  ? "http://192.168.8.150:23704/News-app-BE-api"
  : "http://185.219.111.33:23704/News-app-BE-api";

const api = axios.create({ baseURL });

const getArticles = () => {
  return api.get("/articles").then((res) => {
    console.log("getArticles FULL response:", res.data);
    return res.data.articles;
  });
};

const getArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    console.log(`getArticleByID (${article_id}) response:`, res.data);
    return res.data.article;
  });
};

const getCommentsByArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    console.log(`getCommentsByArticleByID (${article_id}) response:`, res.data);
    return res.data.comments;
  });
};

const postCommentByArticleID = (article_id, comment) => {
  return api.post(`/articles/${article_id}/comments`, comment).then((res) => {
    console.log(`postCommentByArticleID (${article_id}) response:`, res.data);
    return res.data.comment;
  });
};

const deleteCommentsByArticleByID = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => {
    console.log(`deleteCommentsByArticleByID (${comment_id}) response:`, res.data);
    return res.data;
  });
};

const patchArticleVotes = (article_id, vote) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: vote }).then((res) => {
    console.log(`patchArticleVotes (${article_id}) response:`, res.data);
    return res.data.article;
  });
};

const getUsers = () => {
  return api.get("/users").then((res) => {
    console.log("getUsers FULL response:", res.data);
    return res.data.users;
  });
};

const getTopics = () => {
  return api.get("/topics").then((res) => {
    console.log("getTopics response:", res.data);
    return res.data.topics;
  });
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
