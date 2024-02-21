

const movies = [
	{
		"Title": "The Shawshank Redemption",
		"Year": "1994",
		"imdbID": "tt0111161",
	},
	{
		"Title": "The Godfather",
		"Year": "1972",
		"imdbID": "tt0068646",
	},
	{
		"Title": "The Godfather: Part II",
		"Year": "1974",
		"imdbID": "tt0071562",
	},
	{
		"Title": "The Dark Knight",
		"Year": "2008",
		"imdbID": "tt0468569",
	},
	{
		"Title": "12 Angry",
		"Year": "1957",
		"imdbID": "tt0050083",
	},
];

const moviesJSON = JSON.stringify(movies);
console.log(moviesJSON);


console.log(movies);
// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
	data: {
		src: passedArray,
//		keys: ["Title", "Year", "imdbID"],
		cache: true,
		filter: (list) => {
			// Filter duplicates
			// incase of multiple data keys usage
			const filteredResults = Array.from(
				new Set(list.map((value) => value.match))
			).map((food) => {
				return list.find((value) => value.match === food);
			});

			return filteredResults;
		}
	},
	placeHolder: "Search for Food & Drinks!",
	resultsList: {
		element: (list, data) => {
			const info = document.createElement("p");
			if (data.results.length > 0) {
				info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
			} else {
				info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
			}
			list.prepend(info);
		},
		noResults: true,
		maxResults: 15,
		tabSelect: true
	},
	resultItem: {
		element: (item, data) => {
			// Modify Results Item Style
			item.style = "display: flex; justify-content: space-between;";
			// Modify Results Item Content
			item.innerHTML = `
      <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${data.match}
      </span>
      <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
        ${data.key}
      </span>`;
		},
		highlight: true
	},
	events: {
		input: {
			focus: () => {
				if (autoCompleteJS.input.value.length) autoCompleteJS.start();
			}
		}
	}
});

// autoCompleteJS.input.addEventListener("init", function (event) {
//   console.log(event);
// });

// autoCompleteJS.input.addEventListener("response", function (event) {
//   console.log(event.detail);
// });

// autoCompleteJS.input.addEventListener("results", function (event) {
//   console.log(event.detail);
// });

// autoCompleteJS.input.addEventListener("open", function (event) {
//   console.log(event.detail);
// });

// autoCompleteJS.input.addEventListener("navigate", function (event) {
//   console.log(event.detail);
// });

autoCompleteJS.input.addEventListener("selection", function (event) {
	const feedback = event.detail;
	autoCompleteJS.input.blur();
	// Prepare User's Selected Value
	const selection = feedback.selection.value[feedback.selection.key];
	// Render selected choice to selection div
	document.querySelector(".selection").innerHTML = selection;
	// Replace Input value with the selected value
	autoCompleteJS.input.value = selection;
	// Console log autoComplete data feedback
	console.log(feedback);
	console.log(selection);
});

// autoCompleteJS.input.addEventListener("close", function (event) {
//   console.log(event.detail);
// });

autoCompleteJS.searchEngine = "strict";

// Toggle Search Engine Type/Mode
/*document.querySelector(".toggler").addEventListener("click", () => {
	// Holds the toggle button selection/alignment
	const toggle = document.querySelector(".toggle").style.justifyContent;

	if (toggle === "flex-start" || toggle === "") {
		// Set Search Engine mode to Loose
		document.querySelector(".toggle").style.justifyContent = "flex-end";
		document.querySelector(".toggler").innerHTML = "Loose";
		autoCompleteJS.searchEngine = "loose";
	} else {
		// Set Search Engine mode to Strict
		document.querySelector(".toggle").style.justifyContent = "flex-start";
		document.querySelector(".toggler").innerHTML = "Strict";
		autoCompleteJS.searchEngine = "strict";
	}
});*/

// Blur/unBlur page elements
const action = (action) => {
	const title = document.querySelector("h1");
	const selection = document.querySelector(".selection");
	const footer = document.querySelector(".footer");

	if (action === "dim") {
		title.style.opacity = 1;
		selection.style.opacity = 1;
	} else {
		title.style.opacity = 0.3;
		selection.style.opacity = 0.1;
	}
};

// Blur/unBlur page elements on input focus
["focus", "blur"].forEach((eventType) => {
	autoCompleteJS.input.addEventListener(eventType, () => {
		// Blur page elements
		if (eventType === "blur") {
			action("dim");
		} else if (eventType === "focus") {
			// unBlur page elements
			action("light");
		}
	});
});