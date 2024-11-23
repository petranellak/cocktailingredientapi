async function getRandom(){
    try {
      console.log("hello")
      let res = await fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      res = await res.json()
      console.log(res)
      displayingRandomResults(res)
    }catch (error){
      console.log(error)
  } 
  }
  getRandom()
  function displayingRandomResults(res){
    for (let i = 0; i < res.drinks.length; i++) {
      console.log(res.drinks[i].strDrink)
      gallery.innerHTML += `
      <div>
      <a href="./drink.html?id=${res.drinks[i].strDrink}"><img src=${res.drinks[i].strDrinkThumb}> </a>
      <h2>${res.drinks[i].strDrink}</h2>
       <a href="./drink.html?id=${res.drinks[i].strDrink}"><ion-icon name="eye"></ion-icon></a>
      </div>
      `;
    }
  }