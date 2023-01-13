const resultsContainer = document.querySelector(".results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const optione = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const urlY = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;

async function getAny() {
  try {
    const response = await fetch(urlY, optione);  
    const results = await response.json();
    console.log(results);
  
    resultsContainer.innerHTML = "";

    createHtml(results);
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getAny();

function createHtml(what) {
  resultsContainer.innerHTML = `<div class="result">
                                  <div class="specific-image" style="background-image: 
                                   url(${what.image})"></div>
                                  <div class="specific-title">${what.title}</div>
                                  </div>`;
};