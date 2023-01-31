const mainRecipeContainer = document.querySelector(".main-recipe-container");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/715495/information";

async function getData() {

  try{
    const response = await fetch(url, options);
    const json = await response.json();
  
    mainRecipeContainer.innerHTML = "";

    const facts = json.results;
    
    createHtml(json);
      
    }
    catch(error) {
      console.log(error);
      mainRecipeContainer.innerHTML = displayError("An error occured when calling the API");
    }
  }

getData();

function createHtml(main) {
  mainRecipeContainer.innerHTML = `<a href="idSpecific.html?id=${main.id}">
  <div class="main-image" style="background-image: 
   url(${main.image})"><p class="text-box-text box-title">Savory pizza for dinner</p><div class="text-box-text">${main.title}</div></div>
  </a>`;
};