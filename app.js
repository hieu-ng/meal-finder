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
			.then(data => {
				resultHeading.innerHTML = `<h2>Search results for '${term}'</h2>`;

				if (data.meals === null) {
					resultHeading.innerHTML =
						`<p>There is no result for '${term}'. Try again.</p>`;
				} else {
					mealsEl.innerHTML = data.meals.map(meal =>
							`<div class="meal">
							<img src="${meal.strMealThumb}" alt="${meal.strMeal}"
							<div class="mean-info" data-mealID="${mealidMeal}">
								<h3>${meal.strMeal}</h3>
							</div>
						</div>`
						)
						.join('')
				}
			});
		search.value = '';
	} else {
		alert('Please enter a search term');
	}
}

function getMealById(mealID) {
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
		.then(res => res.json())
		.then(data => {
			const meal = data.meals[0];

			addMealToDOM(meal);
		});
}

submit.addEventListener('submit', searchMeal)

mealsEl.addEventListener('click', e => {
	const mealInfo = e.path.find(item => {
		if (item.classList) {
			return item.classList.contains('meal-info');
		} else {
			return false;
		}
	});

	if (mealInfo) {
		const mealId = mealInfo.getAttibute('data-mealid');
		getMealbyId(mealId);
	}
})
