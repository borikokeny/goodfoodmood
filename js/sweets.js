const sweetsContainer = document.querySelector(".sweets-container");

const sweetHead = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const sweetUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4&tags=cake";

async function getSweets() {
  try {
    const response = await fetch(sweetUrl, sweetHead);  
    const results = await response.json();
  
    sweetsContainer.innerHTML = "";

    const sweets = results.recipes;

    for(let i = 0; i < sweets.length; i++) {
      if (!sweets[i].image) {
        continue;
      }
      sweetsContainer.innerHTML += `<a href="idSpecific.html?id=${sweets[i].id}" class="sweet-result">
                                      <div class="sweet-image" style="background-image:       
                                      url(${sweets[i].image})"></div>
                                      <div class="sweet-recipe-name">${sweets[i].title}</div>
                                      </a>`;
    }
  }
  catch(error) {
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getSweets();