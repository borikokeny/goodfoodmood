const resultsContainer = document.querySelector(".results");

const apiKey = "83ceded4f7094c7b81d1c7e0e6d2c46a"; 

const url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=true`;

async function getRecipes() {

  try {
    const response = await fetch(url);  
    const results = await response.json();
    console.log(results);
  
    // resultsContainer.innerHTML = "";

    createHtml(results);


  }
  catch(error) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError("An error occured when calling the API");
  }

}

getRecipes();

function createHtml(results) {
  resultsContainer.innerHTML = `<div class="result">
                                  <div class="image" style="background-image: url(${results.image})"></div>
                                  <div>${results.title}</div>
                                  </div>`;
};
