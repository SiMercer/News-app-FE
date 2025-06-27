import axios from "axios";

const isLAN = window.location.hostname.startsWith("192.168.");
const baseURL = isLAN
  ? "http://192.168.8.150:23704/News-app-BE-api"
  : "http://185.219.111.33:23704/News-app-BE-api";

const api = axios.create({ baseURL });

const getArticles = () => {
  return api.get("/articles")
    .then((res) => {
      console.log("getArticles full res:", JSON.stringify(res, null, 2));
      return res.data.articles;
    });
};

const getArticleByID = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((res) => {
      console.log(`getArticleByID (${article_id}) response:`, res);
      return res.data.article;
    })
    .catch((err) => {
      console.error(`getArticleByID (${article_id}) error:`, err);
      throw err;
    });
};

const getCommentsByArticleByID = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      console.log(`getCommentsByArticleByID (${article_id}) response:`, res);
      return res.data.comments || [];
    })
    .catch((err) => {
      console.error(`getCommentsByArticleByID (${article_id}) error:`, err);
      throw err;
    });
};

const postCommentByArticleID = (article_id, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      console.log(`postCommentByArticleID (${article_id}) response:`, res);
      return res.data.comment;
    })
    .catch((err) => {
      console.error(`postCommentByArticleID (${article_id}) error:`, err);
      throw err;
    });
};

const deleteCommentsByArticleByID = (comment_id) => {
  return api
    .delete(`/comments/${comment_id}`)
    .then((res) => {
      console.log(`deleteCommentsByArticleByID (${comment_id}) response:`, res);
      return res.data;
    })
    .catch((err) => {
      console.error(`deleteCommentsByArticleByID (${comment_id}) error:`, err);
      throw err;
    });
};

const patchArticleVotes = (article_id, vote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((res) => {
      console.log(`patchArticleVotes (${article_id}) response:`, res);
      return res.data.article;
    })
    .catch((err) => {
      console.error(`patchArticleVotes (${article_id}) error:`, err);
      throw err;
    });
};

const getUsers = () => {
  return api
    .get("/users")
    .then((res) => {
      console.log("getUsers response:", res);
      return res.data.users;
    })
    .catch((err) => {
      console.error("getUsers error:", err);
      throw err;
    });
};

const getTopics = () => {
  return api
    .get("/topics")
    .then((res) => {
      console.log("getTopics response:", res);
      return res.data.topics;
    })
    .catch((err) => {
      console.error("getTopics error:", err);
      throw err;
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
