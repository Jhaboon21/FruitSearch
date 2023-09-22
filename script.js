const searchBar = document.querySelector('#fruit');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// rewriting to something I can work from the ground up step by step
// Create a search function that takes the input and list of fruits
function search(input, list) {
	input.addEventListener('input', debounce(function() {
        // Close list if it existed before this...
        closeList();

        // If no input then do nothing
        if (!input.value) return;

        // Create a suggestions <div> and add it to the element containing the input field
        makeContainer();

        // Iterate through entire list and find matches
        for (let index of list) {
            if (index.toLowerCase().includes(input.value.toLowerCase())) {
                createSuggestion(index);
            }
        }
    }, 300));	
}

//Remove the suggestionsContainer
function closeList() { 
    let suggestions = document.getElementById('suggestions');
    if (suggestions) {
        suggestions.remove();
    }    
}

//creates a container that holds the autosuggestions
function makeContainer() {
    const suggestionContainer = document.createElement('div');
    suggestionContainer.setAttribute('id', 'suggestions');
    document.querySelector('.search-container').append(suggestionContainer);
}

//Create the autocomplete suggestions using ul and append them under the searchBar
function createSuggestion(index) {
    //If a match is found create a suggestion <ul> and add it to suggestionContainer
    let suggestion = document.createElement('ul');
    suggestion.innerHTML = index;
    suggestion.style.cursor = 'pointer';

    // add a listener for user mouse click on suggestion to fill in the input with suggestion and close list
    suggestion.addEventListener('click', function (e) {
        searchBar.value = e.target.innerHTML;
        closeList();
    });
    document.querySelector('#suggestions').append(suggestion);
}

//debounce/wait to call function over several inputs
const debounce = (func, wait) => 
{
	let timer = null;
	return function (...args) {
	  if(timer) {
		clearTimeout(timer);
		timer = null;
	  }
	  timer = setTimeout(() => {
		func.apply(this, args);
		timer = null;
	  }, wait);
	}
}

search(searchBar,fruits);