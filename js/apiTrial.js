const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".results");

const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/search?query=yogurt&addChildren=true&minProteinPercent=5&maxProteinPercent=50&minFatPercent=1&maxFatPercent=10&minCarbsPercent=5&maxCarbsPercent=30&metaInformation=false&intolerances=egg&sort=calories&sortDirection=asc&offset=0&number=10";

async function getData() {

  try{
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  
    resultsContainer.innerHTML = "";

    const facts = json.results;
    
    facts.forEach(function(recipe) {
      resultsContainer.innerHTML += `<div class="result">
                                      <div class="image" style="background-image: 
                                       url(https://spoonacular.com/recipeImages/${recipe.image})"></div>
                                      <div>${recipe.name}</div>
                                      </div>`;
    });
      
    }
    catch(error) {
      console.log(error);
      resultsContainer.innerHTML = displayError("An error occured when calling the API");
    }
  }

getData();