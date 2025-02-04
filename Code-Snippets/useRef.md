## What is the use of useRef
1. helps putting some attributes after the tag creation which we otherwise
would be using Id and dom to achive the same functionality
2. useRef let us create reference to a value, such that when u change 
the value, the component DOES NOT RE-RENDER

## Ways to create a variables in React
1. using let
```javaScript
	let value = 1;
	value++;
```
- this we'll almost never use

2. Declearing it as a state Variable
```javaScript
	const [value, setValue] = useState();
```
- We'll be using this if we want to trigger a re-render if the variable
changes

3. Decleraing it as a ref variable
```javaScript
	
```