$("#char-dropdown").change(function () {
  let selectedChar = $(this).children("option:selected").val();
  $("#comic-test").empty();
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#comic-test").offset().top
  }, 2000);
  getCharacterInfo(selectedChar);
})

function getCharacterInfo(character) {
  const key = "126917828959679";
  // const searchTerm = "dr manhattan";
  const queryURL = `https://superheroapi.com/api.php/${key}/search/${character}`;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    let charName = response.results[0].name;
    let charFullName = response.results[0].biography['full-name'];
    let eyeColor = response.results[0].appearance['eye-color'];
    let hairColor = response.results[0].appearance['hair-color'];
    let alias = response.results[0].biography.aliases[0];
    let charImage = response.results[0].image.url;

    let intelligence = response.results[0].powerstats.intelligence;
    // let strength;
    // if (response.results[0].powerstats.strength === null) {
    //   strength = "noooo";
    // } else {strength = response.results[0].powerstats.strength;}
    let strength = response.results[0].powerstats.strength;
    let speed = response.results[0].powerstats.speed;
    let durability = response.results[0].powerstats.durability;
    let power = response.results[0].powerstats.power;

    const test = `<div class="character-section tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child has-background-black is-radiusless box">
                <p class="title has-text-warning">${charName}</p>
                <p class="has-text-warning">Full Name: ${charFullName}</p>
                <p class="has-text-warning">AKA: ${alias} </p>
              </article>
              <article class="tile is-child has-background-warning is-radiusless is-shadowless box">
                <p class="title has-text-black">APPEARANCE</p>
                <p class="has-text-black">Hair: ${hairColor}</p>
                <p class="has-text-black">Eyes: ${eyeColor}</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="power-tile tile is-child has-background-warning is-radiusless is-shadowless box">
                <p class="title has-text-black has-text-centered">POWERS</p>
                <div class="content has-text-black">
                  <ul type="1">
                    <li>STRENGTH: ${strength}</li>
                    <li>INTELLIGENCE: ${intelligence}</li>
                    <li>SPEED: ${speed}</li>
                    <li>DURABILITY: ${durability}</li>
                    <li>POWER: ${power}</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child has-background-black is-radiusless box">
              <p class="title has-text-warning">Wide column</p>
              <p class="subtitle has-text-warning">Aligned with the right column</p>
              <div class="content">
                <p class="has-text-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
                  eu pellentesque tortor
                  vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child has-background-warning is-radiusless is-shadowless box">
            <figure class="image">
              <img src="${charImage}">
            </figure>
          </article>
        </div>
      </div>`;

    $("#comic-test").append(test);
    $("#comic-test").attr("class", "test");


    //   comicDiv = $("#comic-test");
    //   const image = $("<img>")
    //   image.attr("src", response.results[0].image.url);
    //   comicDiv.append(image);
  });
}