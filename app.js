const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');

function searchMeal(e) {
	e.preventDefault();

	single_mealEl.innerHTML = '';

	const term = search.value;
	if (term.trim()) {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
			.then(res => res.json())
			.then(data {
				resultHeading.innerHTML = `<h2>Search results for '${term}'</h2>`
			})
	} else {
		alert('Please enter a search term')
	}
}

submit.addEventListener('submit', searchMeal)
