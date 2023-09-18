const searchBar = document.querySelector('#fruit');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// rewriting to something I can work from the ground up step by step
// Create a search function that takes the input and list of fruits
function search(input, list) {
	input.addEventListener('input', function (e) {
        // Close list if it existed before this...
        closeList();

        // If no input then do nothing
        if (!input.value) return;

        // Create a suggestions <div> and add it to the element containing the input field
		// I'm creating this element because I'm going to use this as a 'parent' to remove this whole list
        const suggestionContainer = document.createElement('div');
        suggestionContainer.setAttribute('id', 'suggestions');
        e.target.parentElement.appendChild(suggestionContainer);

        // Iterate through entire list and find matches
        for (let index of list) {
            if (index.toLowerCase().includes(input.value.toLowerCase())) {
                //If a match is found create a suggestion <ul> and add it to suggestionContainer
                let suggestion = document.createElement('ul');
                suggestion.innerHTML = index;
				suggestion.style.cursor = 'pointer';

				// add a listener for user mouse click on suggestion to fill in the input with suggestion and close list
				suggestion.addEventListener('click', function (e) {
                    input.value = e.target.innerHTML;
                    closeList();
                });
				// on mouseover or leave, change background color to highlight choice
				suggestion.addEventListener("mouseover", function (e) {
					e.target.classList.toggle("hover");
				})
				suggestion.addEventListener("mouseleave", function (e) {
					e.target.classList.toggle("hover");
				})                

                suggestionContainer.appendChild(suggestion);
            }
        }
    });

	// removing the suggestion container seems simpler than going through the list with a loop
	function closeList() { 
        let suggestions = document.getElementById('suggestions');
        if (suggestions) {
			suggestions.remove();
		}    
    }
}
// const debounce = (func, wait) => 
// {
// 	let timer = null;
// 	return function (...args) {
// 	  if(timer) {
// 		clearTimeout(timer);
// 		timer = null;
// 	  }
// 	  timer = setTimeout(() => {
// 		func.apply(this, args);
// 		timer = null;
// 	  }, wait);
// 	}
// }

search(searchBar,fruits);