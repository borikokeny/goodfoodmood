const sweetsContainer = document.querySelector(".sweets-container");

const sweetHead = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const sweetUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2&tags=sweets";

async function getSweets() {
  try {
    const response = await fetch(sweetUrl, sweetHead);  
    const results = await response.json();
  
    sweetsContainer.innerHTML = "";

    const sweets = results.recipes;
    console.log(sweets);

    for(let i = 0; i < sweets.length; i++) {
      if (!sweets[i].image) {
        continue;
      }
      sweetsContainer.innerHTML += `<a href="idSpecific.html?id=${sweets[i].id}" class="result">
                                      <div class="image" style="background-image:       
                                      url(${sweets[i].image})"></div>
                                      <div class="recipe-name">${sweets[i].title}</div>
                                      </div>`;
    }
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getSweets();