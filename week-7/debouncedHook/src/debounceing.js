let currentClock;

function searchOperation() {
	console.log("We searched!");
}

function debouncedSearchOperation() {
	// if the fun is called again befor the inital clock end it restarts 
	// another clock.
	clearInterval(currentClock);

	// whenever the function is called we wait for 30 sec befor actually 
	// calling the actual search function
	currentClock = setTimeout(searchOperation, 20); 
}

debouncedSearchOperation()
debouncedSearchOperation()
debouncedSearchOperation()
debouncedSearchOperation()
debouncedSearchOperation()
debouncedSearchOperation()

// we check the output the searchOperation will be only called ones 