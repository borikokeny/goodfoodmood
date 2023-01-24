const resultsContainer = document.querySelector(".results");

const x = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const y = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=american";

async function getFood() {
  try {
    const response = await fetch(y, x);  
    const results = await response.json();
  
    resultsContainer.innerHTML = "";

    const facts = results.recipes;
    console.log(facts);

    for(let i = 0; i < facts.length; i++) {
      if (!facts[i].image) {
        continue;
      }
      resultsContainer.innerHTML += `<a href="idSpecific.html?id=${facts[i].id}" class="result">
                                      <div class="image" style="background-image:       
                                      url(${facts[i].image})"></div>
                                      <div class="recipe-name">${facts[i].title}</div>
                                      </div>`;
    }
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getFood();