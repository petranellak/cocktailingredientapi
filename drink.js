const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const drink = document.getElementById('drink')
console.log(id)

// const prev = document.getElementById('Prev');
// const next = document.getElementById('Next');

// prev.addEventListener("click", prevResult)
// next.addEventListener("click", nextResult)

// let backBtn = document.getElementById("backBtn");
// backBtn.addEventListener("click", getInfo);



// function prevResult (){
//     page++
//     result.innerHTML = `
//     <p>${res.drinks[page].strInstructions}</p>
//     <div class="flex-container">
//     <img src=${json.drinks[page].strDrinkThumb}>
//     <a href ="${json.drinks[page].strVideo}"><ion-icon name="videocam-outline"></ion-icon> </a>
//     </div>
//     `;
  
//   }
//   function nextResult(){
//    page++
//    result.innerHTML = `
//    <p>${res.drinks[page].strInstructions}</p>
//     <div class="flex-container">
//     <img src=${json.drinks[page].strDrinkThumb}>
//     <a href ="${json.drinks[page].strVideo}"><ion-icon name="videocam-outline"></ion-icon> </a>
//     </div>
//    `;
//   }



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




