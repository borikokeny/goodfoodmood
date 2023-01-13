const resultsContainer = document.querySelector(".results");

const x = {
	method: 'GET',
	headers: {
		'X-API-Key': '1',
		'X-API-Host': 'www.themealdb.com'
	}
};

const y = "https://www.themealdb.com/api/json/v1/1/filter.php?i=beef";

async function getFood() {
  try {
    const response = await fetch(y);  
    const data = await response.json();
    console.log(data);
  
    resultsContainer.innerHTML = "";

    const facts = data.meals;
    console.log(facts);

    facts.forEach(function(food) {
      resultsContainer.innerHTML += `<div class="result">
                                      <div>${food.strMeal}</div>
                                      <div class="image" style="background-image: url(${food.strMealThumb})"></div>
                                      </div>`;
    });
  
    // for(let i = 0; i < data.length; i++) {
    //   console.log(data[i]);
  
    //   if (i === 5) {
    //     break;
    //   }
  
    //   resultsContainer.innerHTML += `<div class="result">${facts[i].sourceName}</div>`;
    // }
  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }

}

getFood();

// https://cat-fact.herokuapp.com/facts
// </div>${recipe.description}</div>