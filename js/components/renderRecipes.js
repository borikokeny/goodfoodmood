export  function renderRecipes(recipeToRender){
  const recipeContainer = document.querySelector(".results");
  recipeContainer.innerHTML = "";
  
  for(let i = 0; i < recipeToRender.length; i++) {
    
    if (!recipeToRender[i].image) {
      continue;
    }
   
    const szavak = recipeToRender[i].diets;

    let osszeg = "";

    for (let i = 0; i < szavak.length; i++) {
      osszeg = osszeg + `<h5>${szavak[i]}</h5>`;
    }

    const ujSzavak = recipeToRender[i].extendedIngredients;

    let ujOsszeg = "";

    for (let i = 0; i < ujSzavak.length; i++) {
      ujOsszeg = ujOsszeg + `<h6>${ujSzavak[i].name}</h6>`;
    }

    recipeContainer.innerHTML += `<a href="idSpecific.html?id=${recipeToRender[i].id}" class="result">
                                  <div class="image" style="background-image:       
                                  url(${recipeToRender[i].image})" alt="${recipeToRender[i].title}"></div>
                                  <h4>${recipeToRender[i].title} 
                                  </h4>
                                  ${osszeg}
                                  ${ujOsszeg}
                                  </a>`;
  }
}
