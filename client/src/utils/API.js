import axios from "axios";

export default {
    // Gets all articles
    getArticles: function() {
      return axios.get("/api/articles");
    },
    // Gets the articles with the given id
    getArticle: function(id) {
      return axios.get("/api/article/" + id);
    },
    // Deletes the article with the given id
    deleteBook: function(id) {
      return axios.delete("/api/article/" + id);
    },
    // Saves a book to the database
    saveBook: function(articleData) {
      return axios.post("/api/article", articleData);
    }
  };