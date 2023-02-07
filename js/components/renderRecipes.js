export  function renderRecipes(recipeToRender){
  const recipeContainer = document.querySelector(".results");
  recipeContainer.innerHTML = "";
  
  for(let i = 0; i < recipeToRender.length; i++) {
    if (!recipeToRender[i].image) {
      continue;
    }
 
    const diets = recipeToRender[i].diets;

    for (let i = 0; i < diets.length; i++) {
      if (!diets[i]) {
        continue;
      }
    

    recipeContainer.innerHTML += `<a href="idSpecific.html?id=${recipeToRender[i].id}" class="result">
                                  <div class="image" style="background-image:       
                                  url(${recipeToRender[i].image})" alt="${recipeToRender[i].title}"></div>
                                  <h4 class="search-titles">${recipeToRender[i].title}</h4>
                                  <h5>${diets[0]}</h5>
                                  </a>`;
                                }
                              }    
  };
