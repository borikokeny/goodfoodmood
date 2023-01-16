const searchHeader = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const listContainer = document.querySelector(".results");
const search = document.querySelector(".search");

const searchList = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=wrap";

async function getResult() {

  try {
    const response = await fetch(searchList, searchHeader);
    const results = await response.json();
    // console.log(results);

    listContainer.innerHTML = "";

    const facts = results.recipes;

    

    facts.forEach(function(searchResults) {
      listContainer.innerHTML += `<div class="result">
                                   <h4>${searchResults.title} 
                                   </h4>
                                   </div>`;
    });

    search.onkeyup = function (event) {
      // console.log(event);
    
      const searchValue = event.target.value.trim().toLowerCase();
    
      const filteredRecipes = facts.filter(function (searchResults) {
        if (searchResults.title.toLowerCase().startsWith(searchValue)) {
          return true;
        }
      });
    
       console.log(filteredRecipes);

       facts = filteredRecipes;

       getResult();
    
    };

  }
  catch(error) {
    console.log("An error occured");
    listContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getResult();





// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=chicken&number=10