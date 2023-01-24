const groupContainer = document.querySelector(".gr-asian");

const optione = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const urlY = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=asian";

async function getAny() {
  try {
    const response = await fetch(urlY, optione);  
    const results = await response.json();

    // createHtml(results);

    groupContainer.innerHTML = "";

    const facts = results.recipes;

    for(let i = 0; i < facts.length; i++) {
      groupContainer.innerHTML = `<a href="idSpecificGroup.html" class="result">
      <div class="image" style="background-image: 
       url(${facts[0].image})"></div>
      <div>${facts[0].title}</div>
      </a>`;
    }  

  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getAny();

// function createHtml(what) {



// };

