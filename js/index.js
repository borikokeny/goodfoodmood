const a = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".results");

const b = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=comfort";

async function getTwo() {

  try {
    const response = await fetch(b, a);  
    const results = await response.json();
    console.log(results);
  
    resultsContainer.innerHTML = "";

    const facts = results.recipes;

    facts.forEach(function(dish) {
      resultsContainer.innerHTML += `<a href="idSpecific.html?id=${dish.id}" class="result">
                                      <div class="image" style="background-image: url(${dish.image})"> 
                                      </div>
                                      <div>${dish.title}</div>
                                      </div>`;
    });
 
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getTwo();
