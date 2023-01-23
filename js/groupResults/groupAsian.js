const groupContainer = document.querySelector(".gr-asian");

const optione = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const urlY = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/638693/information`;

async function getAny() {
  try {
    const response = await fetch(urlY, optione);  
    const results = await response.json();
    console.log(results);

    createHtml(results);
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getAny();

function createHtml(what) {
  groupContainer.innerHTML = `<a href="idSpecificGroup.html" class="result">
                                  <div class="image" style="background-image: 
                                   url(${what.image})"></div>
                                  <div>${what.title}</div>
                                  </a>`;
};