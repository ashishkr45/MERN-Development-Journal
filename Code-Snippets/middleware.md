### Highlevel exp Middleware:
**Purpose**: Person sitting in the middle, doing cretern check and making sure only ligitimate 
	people are going through.
**Defination**: Express is a routing and middleware web framework that has minimal functionality of its own: 
	An Express application is essentially a series of middleware function calls.

*Middleware* functions are functions that have access to the request object (req), the response object (res), and the next
middlewar . function in the application's **request-response cycle**.

**Middleware functions can perform the following tasks**:
	Execute any code.
	Make changes to the request and the response objects.
	End the request-response cycle.
	Call the next middleware function in the stack.

**An express app is a serise of middleware calls**

**code example**
```javascript
function isOldEnough(age) { // normal function 
	retrun age >= 18 ? true : false;
}

// using middlewares
function isOldEnoughMiddleware(req, res, next) {
	const age = req.query.age;
	if(age >= 18) {
		next(); // calling for the next middleware
	} else {
		res.json({
			msg: "Sorry try for different ride.";
		});
	}
}

app.get("/ride", isOldEnoughMiddleware, (res, req) => { // calling the middleware befor the ride
	res.json({
		msg: "Please enjoy the ride."
	});
}); // check in week-3/middleware
```
### Middleware for tracking the number of requests made to the server
*make a gloabl variable* or pharaps use a loacl-file to consoladate the storage
```javascript
let reqCounter = 0;
app.use((req, res, next) => {
	reqCounter++; // increament the counter
	next(); // then call the next middleware
})
```