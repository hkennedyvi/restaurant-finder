$(document).ready(getCharacters);

$("#test-btn").click(function() {
    console.log("Hello")
  });

function getCharacters() {
  const queryURL = "https://superheroapi.com/api.php/";
  const key = "126917828959679";
  const searchTerm = "/search/wolverine"

  $.ajax({
    url: queryURL + key + searchTerm,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });
}