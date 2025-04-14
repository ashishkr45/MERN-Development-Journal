## What are Headders: 
basically headders are the extra meta data sent the server
## Fetch ##
for sending background request to the server. which is nativaly avilable in the js libraies
*moreinfo: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API".*
**syntax**
```javascript
	async function getData() {
		const response = await fetch("url of the place where we want the data from"); // this'll return a promise
		/* by deafault it method is get but we can also send specific requests */
		const responde1 = await fetch("url", {
			method: "GET",
		});
		const data = await response.json(); // we convert to json cuz, server sands the raw response.

	}
```

## Axios ##
1. dose the same thing as fetch but the syntax is cleaner then Fetch.
2. http clinte
**syntax**
```javascript
	// we first need to bring the axios library to the code, that'll add extra bulk
	const axios = require("axios");
	const response = await axios.get("url of the data"); // this'll by default convert the data to json
```