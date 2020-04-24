// $(document).ready(getCharacters);

$("#comic-btn").click(function () {
    console.log("hiii")
    getCharacters("ozymandias");
})

$(".char-dropdown").change(function () {
    let selectedChar = $(this).children("option:selected").val();
    getCharacters(selectedChar);
  
    let input = "HELLO"
    const test = `<div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p class="title">${input}</p>
            <p class="subtitle">Alias 1</p>
            <p class="subtitle">Alias 2</p>
          </article>
          <article class="tile is-child box">
            <p class="title">WORK</p>
            <p class="subtitle">Occupation</p>
            <p class="subtitle">Base</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">STRENGTHS</p>
            <div class="content">
              <ul type="1">
                <li>${input}</li>
                <li>${input}</li>
                <li>${input}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Wide column</p>
          <p class="subtitle">Aligned with the right column</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        {{!-- <div class="content"> --}}
        <figure class="image">
          <img src="https://www.superherodb.com/pictures2/portraits/10/100/884.jpg">
        </figure>
        {{!-- </div> --}}
      </article>
    </div>
  </div>`;

    $("#comic-test").append(test);

    console.log(selectedChar);

})

function getCharacters(character) {
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
        let alias = response.results[0].biography.aliases[0];
        let charPowers = response.results[0].powerstats;
        let charImage = response.results[0].image.url;

        const test = `<div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <p class="title">${charName}</p>
                <p class="subtitle">Alias 1</p>
                <p class="subtitle">Alias 2</p>
              </article>
              <article class="tile is-child box">
                <p class="title">WORK</p>
                <p class="subtitle">Occupation</p>
                <p class="subtitle">Base</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">STRENGTHS</p>
                <div class="content">
                  <ul type="1">
                    <li>${alias}</li>
                    <li>${charName}</li>
                    <li>${charFullName}</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Wide column</p>
              <p class="subtitle">Aligned with the right column</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                  vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            {{!-- <div class="content"> --}}
            <figure class="image">
              <img src=${charImage}>
            </figure>
            {{!-- </div> --}}
          </article>
        </div>
      </div>`;
    
        $("#comic-test").append(test);


        //   comicDiv = $("#comic-test");
        //   const image = $("<img>")
        //   image.attr("src", response.results[0].image.url);
        //   comicDiv.append(image);
    });
}