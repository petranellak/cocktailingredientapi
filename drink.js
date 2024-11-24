const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const drink = document.getElementById('drink')
console.log(id)

let backBtn = document.getElementById('backBtn');

backBtn.addEventListener("click", backBtn)






async function getDrink() {
    try {
        let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
        res = await res.json()
        console.log(res)
        displayingDrink(res)
    } catch (error) {
        console.log(error)
    }
    
}
getDrink()
function displayingDrink(res) {
    drink.innerHTML = `
        
    <h2>${id}</h2>
        <p>${res.drinks[0].strInstructions}</p>
        <div class="flex-container">
        <img src=${res.drinks[0].strDrinkThumb}>
        <a href="${res.drinks[0].strVideo}"><ion-icon name="videocam-outline"></ion-icon></a>
        </div>
    `

}

// function backBtn (){
//     page++
//     result.innerHTML = `
//     <div>
//         <a href="./drink.html?id=${res.drinks[i].strDrink}"> <img src=${res.drinks[i].strDrinkThumb}> </a>
//         <h2>${res.drinks[i].strDrink}</h2>
//         <a href="./drink.html?id=${res.drinks[i].strDrink}"><ion-icon name="eye"></ion-icon></a>
//         </div>
//         `;
  
// }




