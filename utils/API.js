const axios = require("axios");

export default {
    getCharacters: function() {
      return axios.get("https://superheroapi.com/api/");
    }
  };