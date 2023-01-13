const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const resultsContainer = document.querySelector(".results");

const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";

async function getData() {

  try{
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  
    resultsContainer.innerHTML = "";

    const facts = json.results;
    
    facts.forEach(function(recipe) {
      resultsContainer.innerHTML += `<div class="result">
                                      <div class="image" style="background-image: url(${recipe.thumbnail_url})"></div>
                                      <div>${recipe.name}</div>
                                      </div>`;
    });
      
    }
    catch(error) {
      console.log(error);
      resultsContainer.innerHTML = displayError("An error occured when calling the API");
    }
  }

getData();