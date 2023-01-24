// ez mukodott

const resultsContainer = document.querySelector(".results");
const groupTittel = document.querySelector(".group-tittel");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};


const urlX = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=asian`;


async function getSome() {

  try {
    const response = await fetch(urlX, options);  
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    const facts = results.recipes;

    const factsToRender = facts;

    for(let i = 0; i < factsToRender.length; i++) {
      groupTittel.innerHTML = `<div class="group-tittel">The best ${factsToRender[0].cuisines[1]} recipes</div>`;
    }

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





