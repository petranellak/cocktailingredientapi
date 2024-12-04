

// DOMS

let result = document.getElementById("drinkResult");
let instructions = document.getElementById("instructions")
let searchBtn = document.getElementById("searchBtn");
let searchBox = document.getElementById("search");
let gallery = document.getElementById("gallery");
// let contactMeDiv = document.getElementById("contactMe");


// listeners

window.addEventListener("load", getData);
searchBtn.addEventListener("click", getInfo);



// global storing data so can use next and prev button

let json ={}
page = 0


// API
let urlInstructions = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
let url = "https://thecocktaildb.com/api/json/v1/1/filter.php?i="
let baseurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
let randomurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  

// Get random pull

async function getData() {

    searchBox.value = '';

    try {
      
      const res =  await fetch(baseurl)
     const data = await res.json()
     console.log('random data')
      console.log(data.drinks)
      const drinks = data.drinks;

      // Displaying the results
      for (let i = 0; i < drinks.length; i++) {
        // console.log(drinks)
        gallery.innerHTML += `
        <div>
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

// Fot the search function

async function getInfo() {
  let search = searchBox.value;
  console.log(search)
  if (search.value) {
    console.log(search)
   
    
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
      
    } catch (error) {
      console.log(error)
      result.innerHTML = `<h3 class="msg">Whoops! </h3>`;
      // e.target.reset();
    } 
  }
}

