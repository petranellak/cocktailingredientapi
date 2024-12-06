
// DOMS
// drinksresult is the drinks from the search bar
let result = document.getElementById("drinkResult");
// the instructions as to how to make the selected drink
let instructions = document.getElementById("instructions")
// searchbtn adjacent searchbar
let searchBtn = document.getElementById("searchBtn");
// search bar
let searchBox = document.getElementById("search");
// gallery for search results
let gallery = document.getElementById("gallery");


// API's
// API for instructions for making selected cocktail
let urlInstructions = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
// Ingredient API pull for search bar
let url = "https://thecocktaildb.com/api/json/v1/1/filter.php?i="
// the API for the index page
let baseurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let randomurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  

// listeners

window.addEventListener("load", getData);
searchBtn.addEventListener("click", getInfo);



// Get random pull

async function getData() {
// clears searchbox value after last entry
    searchBox.value = '';

    try {
      
      const res =  await fetch(baseurl)
     const data = await res.json()
      const drinks = data.drinks;

      // Displaying results on the index landing page (margarita's)
      for (let i = 0; i < drinks.length; i++) {
        gallery.innerHTML += `<div>
        <a href="./drink.html?id=${drinks[i].strDrink}"> <img src=${drinks[i].strDrinkThumb}> </a>
        <h2>${drinks[i].strDrink}</h2>
        <a href="./drink.html?id=${drinks[i].strDrink}"><ion-icon name="eye"></ion-icon></a>
        </div>
        `;
      } 
}
catch(e) {
        console.log(e)
    }
}

// For the search function

async function getInfo() {
  let search = searchBox.value;
  console.log(search)
  if (search.value === '') {
    return;
  } 
    try {
      gallery.innerHTML = ""
      
      const res =  await fetch(urlInstructions + search)
     const json = await res.json()
      

      // Displaying the results for the search results for a single ingredient
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
// clear searchbox value
       searchBox.value = ""
      //  error message for more thanone ingredient ir misspelled ingredient
    } catch (error) {
      console.log(error)
      gallery.innerHTML = `<h3 class="msgone">Please list one ingredient!</h3>`;
    } 
  
}

// function for pulling instructions

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
      
    } catch (error) {
      console.log(error)
      result.innerHTML = `<h3 class="msg">Whoops! </h3>`;
    } 
  }
}

