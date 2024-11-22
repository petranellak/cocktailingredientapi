

// DOMS

let result = document.getElementById("drinkResult");
let instructions = document.getElementById("instructions")
let searchBtn = document.getElementById("searchBtn");
// const prev = document.getElementById('Prev');
// const next = document.getElementById('Next');
let searchBox = document.getElementById("search");
let gallery = document.getElementById("gallery");
let contactMeDiv = document.getElementById("contactMe");


// listeners

window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);
// prev.addEventListener("click", prevResult);
// next.addEventListener("click", nextResult);
contactBtn.addEventListener("click", contactMe );


// global storing data so can use next and prev button

let json ={}
page = 0




// Global variable for Contact details
var myGlobalVariable = "Email Petranella :pkovacs@student.holmesglen.edu.au <br> mobile:0421699789";
let contactEmail = "pkovacs@student.holmesglen.edu.au"
contactMeDiv.innerHTML = myGlobalVariable

function contactMe(){
  console.log(myGlobalVariable);
}
contactMe();
console.log(myGlobalVariable);


// buttons for the gallery

// function prevPage (){
//   page++
//   result.innerHTML = `
//   <img src=${json.drinks[page].strDrinkThumb}>
//   <h2>${json.drinks[page].strDrink}</h2>
//   `;

// }
// function nextPage(){
//  page++
//  result.innerHTML = `
//  <img src=${json.drinks[page].strDrinkThumb}>
//  <h2>${json.drinks[page].strDrink}</h2>
//  `;
// }

// Next filtered searched drinks

// function prevResult (){
//   page++
//   result.innerHTML = `
//   <img src=${json.drinks[page].strDrinkThumb}>
//   <h2>${json.drinks[page].strDrink}</h2>
//   `;

// }
// function nextResult(){
//  page++
//  result.innerHTML = `
//  <img src=${json.drinks[page].strDrinkThumb}>
//  <h2>${json.drinks[page].strDrink}</h2>
//  `;
// }

// API
let urlInstructions = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
let url = "https://thecocktaildb.com/api/json/v1/1/filter.php?i="
let baseurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
// Async function to wait for data

async function getInfo() {
  let search = searchBox.value
  if (search.length == 0) {
    // result instead of gallery
    
  } else {
    try {
      gallery.innerHTML = ""
      const res =  await fetch(urlInstructions + search)
     json = await res.json()
      console.log(json)

      // Displaying the results
      for (let i = 0; i < json.drinks.length; i++) {
        console.log(json.drinks)
        gallery.innerHTML += `
        <div>
        <a href="./drink.html?id=${json.drinks[i].strDrink}"> <img src=${json.drinks[i].strDrinkThumb}> </a>
        <h2>${json.drinks[i].strDrink}</h2>
        <a href="./drink.html?id=${json.drinks[i].strDrink}"><ion-icon name="eye"></ion-icon></a>
        </div>
        `;
      }

       searchBox.value = ""
       
    } catch (error) {
      console.log(error)
      gallery.innerHTML = `<h3 class="msgone">Please list one ingredient!</h3>`;
    } 
  }
}

// async function for make instructions

async function getInstructions() {
  if (search.length == 0) {
    result.innerHTML = `<h3 class="msgone">Please list one ingredient!</h3>`;
  } else {
    try {
      const res =  await fetch(urlInstructions + json.drinks[page].strDrink)
     jsonInstructions = await res.json()
      console.log("instruction", jsonInstructions)
      instructions.innerHTML = `
       
       <div>${jsonInstructions.drinks[0].strInstructions}</div>
       `;
      //  contactMeDiv.value = ""
      //  instructionsDIV.innerHTML='';
    } catch (error) {
      console.log(error)
      result.innerHTML = `<h3 class="msg">Whoops! </h3>`;
      // e.target.reset();
    } 
  }
}

// async function getIngredients() {
//   if (search.length == 0) {
//     result.innerHTML = `<h3 class="msgone">Please list one ingredient!</h3>`;
//   } else {
//     try {
//       const res =  await fetch(url + json.drinks[page].strMeasure.strIngredient)
//      jsonIgredients = await res.json()
//       console.log("ingredientResult", jsonInstructions)
//       instructions.innerHTML = `
       
//        <div>${jsonInstructions.drinks[0].strMeasure.strIngredient}</div>
//        `;
//        makeBtn.value = ""
//       //  instructionsDIV.innerHTML='';
//     } catch (error) {
//       console.log(error)
//       result.innerHTML = `<h3 class="msg">Whoops! </h3>`;
//       // e.target.reset();
//     } 
//   }
// }
