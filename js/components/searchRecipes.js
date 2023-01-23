// import { renderRecipes } from "./renderRecipes.js";

// export function searchRecipes(recipes) {

//   const search = document.querySelector(".search");
  
//   search.onkeyup = function(event) {
   
//   event.preventDefault();

//    const searchValue = event.target.value.trim().toLowerCase();
   
//    const filteredRecipes = recipes.filter(function (recipeToRender) {
//     if (recipeToRender.title.toLowerCase().includes(searchValue)) {

//       return true;       
//     }

//     for (let i = 0; i < recipeToRender.diets.length; i++) {
//       if (recipeToRender.diets[i].toLowerCase().includes(searchValue)) {
//         return true;
//       }
//     }

//     for (let i = 0; i < recipeToRender.extendedIngredients.length; i++) {
//       if (recipeToRender.extendedIngredients[i].name.toLowerCase().includes(searchValue)) {
//         return true;
//       }
//     }

//    });
//     console.log(filteredRecipes);
//    renderRecipes(filteredRecipes);
//    };
// }




// import { renderRecipes } from "./renderRecipes.js";

// export function searchRecipes(recipes) {

//   const search = document.querySelector(".search");
  
  // input.addEventListener("keypress", function(event) {

  //   if (event.key === "Enter") {
      
  //     event.preventDefault();

  //     document.getElementsByClassName("search-button").click();

  //     const searchValue = event.target.value.trim().toLowerCase();
   
  //     const filteredRecipes = recipes.filter(function (recipeToRender) {
  //      if (recipeToRender.title.toLowerCase().includes(searchValue)) {
   
  //        return true;       
  //      }
   
  //      for (let i = 0; i < recipeToRender.diets.length; i++) {
  //        if (recipeToRender.diets[i].toLowerCase().includes(searchValue)) {
  //          return true;
  //        }
  //      }
   
  //      for (let i = 0; i < recipeToRender.extendedIngredients.length; i++) {
  //        if (recipeToRender.extendedIngredients[i].name.toLowerCase().includes(searchValue)) {
  //          return true;
  //        }
  //      }
   
  //     });
  //   }

   
  //    console.log(filteredRecipes);
  //   renderRecipes(filteredRecipes);
  //   });

  // };

  import { renderRecipes } from "./renderRecipes.js";

export function searchRecipes(recipes) {

  const search = document.querySelector(".search");
  const searchButton = document.querySelector(".search-button");
  
  searchButton.onclick = function() {
   
  event.preventDefault();

   const searchValue = search.value.trim().toLowerCase();
   
   const filteredRecipes = recipes.filter(function (recipeToRender) {
    if (recipeToRender.title.toLowerCase().includes(searchValue)) {

      return true;       
    }

    for (let i = 0; i < recipeToRender.diets.length; i++) {
      if (recipeToRender.diets[i].toLowerCase().includes(searchValue)) {
        return true;
      }
    }

    for (let i = 0; i < recipeToRender.extendedIngredients.length; i++) {
      if (recipeToRender.extendedIngredients[i].name.toLowerCase().includes(searchValue)) {
        return true;
      }
    }

   });
    console.log(filteredRecipes);
   renderRecipes(filteredRecipes);
   };
}

