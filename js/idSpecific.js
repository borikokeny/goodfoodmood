const resultsContainer = document.querySelector(".idResult");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const cuisine = params.get("cuisines");

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

  const diets = what.diets;

  let allDiets = "";

  for(let i = 0; i < diets.length; i++) {
    allDiets = allDiets + `<h5>${diets[i]}</h5>`;
    console.log(diets);
  }
  
    const ingredients = what.extendedIngredients;
  
    let allIngredients = "";
  
    for (let i = 0; i < ingredients.length; i++) {
      allIngredients = allIngredients + `<h6>${ingredients[i].name}</h6>`;
    }

  resultsContainer.innerHTML = `<div class="specific-image" style="background-image: 
                                   url(${what.image})"></div>
                                  <ul class="specific-info"><li class="specific-title"><h1>${what.title}</h1></li>
                                  <li class="specific-sub-title">Prep & Cook: ${what.readyInMinutes} min</li>
                                  <h2>${allDiets}</h2>
                                  <h3 class="ingredients">${allIngredients}</h3>
                                  <li class="specific-instruction">${what.instructions}</li></ul>`;
};