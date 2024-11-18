const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const drink = document.getElementById('drink') 
console.log(id)


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
        <img src=${res.drinks[0].strDrinkThumb}>
        <a href="${res.drinks[0].strVideo}">Video</a>
    `
}