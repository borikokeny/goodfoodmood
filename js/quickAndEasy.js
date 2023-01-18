const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".results");

const urlX = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

async function getMore() {
  try {
    const response = await fetch(urlX, options);  
    const results = await response.json();
    console.log(results);
  
    resultsContainer.innerHTML = "";

    const facts = results.results;
    console.log(facts);

    // const moreFacts = facts;
    // console.log(moreFacts);

    facts.forEach(function(cuisine) {
      resultsContainer.innerHTML += `<a href="idSpecific.html?id=${cuisine.id}" class="result">
                                      <div class="image" style="background-image: 
                                       url(${cuisine.image})"></div>
                                      <div>${cuisine.title}</div>
                                      </a>`;
    });
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getMore();

