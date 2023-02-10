const resultsContainer = document.querySelector(".results");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const urlX = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

async function getFood() {
  try {
    const response = await fetch(urlX, options);  
    const results = await response.json();
  
    resultsContainer.innerHTML = "";

    const facts = results.results;
    
    for(let i = 0; i < facts.length; i++) {
      if (!facts[i].image) {
        continue;
      }
      resultsContainer.innerHTML += `<a href="idSpecific.html?id=${facts[i].id}" class="result">
                                      <div class="image" style="background-image:       
                                      url(${facts[i].image})"></div>
                                      <div class="link-title">${facts[i].title}</div>
                                      </a>`;
    }
  }
  catch(error) {
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getFood();


