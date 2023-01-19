export  function renderRecipes(recipeToRender){
  const recipeContainer = document.querySelector(".results");
  recipeContainer.innerHTML = "";

  // recipeToRender.forEach(function(searchResults) {
  //     recipeContainer.innerHTML += `<div class="result">
  //                                  <h4>${searchResults.title} 
  //                                  </h4>
  //                                  <div class="image" style="background-image:       
  //                                   url(${searchResults.image})"></div>
  //                                  <h5></h5>
  //                                  </div>`;
  // });

  
  for(let i = 0; i < recipeToRender.length; i++) {

    // if(recipeToRender[i].vegetarian)
    // console.log(recipeToRender[i].title);

      // let recipes = recipeToRender[i];

    const szavak = recipeToRender[i].diets;
  

    let osszeg = "";

    for (let i = 0; i < szavak.length; i++) {
      osszeg = osszeg + `<h5>${szavak[i]}</h5>` ;
    }
    // console.log(osszeg);

    const ujSzavak = recipeToRender[i].extendedIngredients;

    let ujOsszeg = "";

    for (let i = 0; i < ujSzavak.length; i++) {
      ujOsszeg = ujOsszeg + `<h6>${ujSzavak[i].name}</h6>`;
    }

    // console.log(ujOsszeg);

    recipeContainer.innerHTML += `<div class="result">
                                  <h4>${recipeToRender[i].title} 
                                  </h4>
                                  <div class="image" style="background-image:       
                                  url(${recipeToRender[i].image})" alt="${recipeToRender[i].title}"></div>
                                  ${osszeg}
                                  ${ujOsszeg}
                                  </div>`;
  }
}

// for(let i = 0; i < recipeToRender.length; i++) {
//   recipeContainer.innerHTML += `<div class="result">
//                                 <h4>${recipeToRender[i].title} 
//                                 </h4>
//                                 <div class="image" style="background-image:       
//                                 url(${recipeToRender[i].image})" alt="${recipeToRender[i].title}"></div>
//                                 <h5></h5>
//                                 </div>`;
// }