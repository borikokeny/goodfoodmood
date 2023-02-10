const c = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".italian");

const d = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=italian";

async function getGroup() {

  try {
    const response = await fetch(d, c);  
    const results = await response.json();
    console.log(results);
  
    resultsContainer.innerHTML = "";

    const groupFact = results.recipes;

    groupFact.forEach(function(meals) {
      resultsContainer.innerHTML += `<a href="idSpecificGroup.html?cuisines=${meals.cuisines}" class="group-result">
                                      <div class="image" style="background-image: url(${meals.image})"> 
                                      </div>
                                      </a>`;
    });
 
  }
  catch(error) {
  
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getGroup();