const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".results");

const urlX = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=asian";

async function getSome() {
  try {
    const response = await fetch(urlX, options);  
    const results = await response.json();
    console.log(results);
  
    resultsContainer.innerHTML = "";

    const facts = results.recipes;

    const factsToRender = facts;

    factsToRender.forEach(function(cuisine) {
      resultsContainer.innerHTML += `<a href="idSpecific.html?id=${cuisine.id}" class="result">
                                      <div class="image" style="background-image:       
                                      url(${cuisine.image})"></div>
                                      <div>${cuisine.title}</div>
                                      </div>`;
    });
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getSome();

// const form = document.querySelector("#searchForm");

//       form.onsubmit = function (event) {

//          event.preventDefault();
//          console.log(event);
//       }; 

search.onkeyup = function (event) {
  // console.log(event);

const searchValue = event.target.value.trim().toLowerCase();

const filteredRecipes = facts.filter(function (searchResults) {
  if (searchResults.title.toLowerCase().startsWith(searchValue)) {
    return true;            
  }
});

console.log(filteredRecipes);

factsToRender = filteredRecipes;

getResult();
};

// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course

