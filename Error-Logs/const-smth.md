## Things about const
```javaScript
	const count = 0;
	count++; // this'll throw a error

	const countArr = [1, 2]; // we have decleared a array in const
	// and now if we change 
	countArr = 5; // this'll oviously throw an error
	countArr[0] = 5; // but this'll NOT
```
- This means we cannot change the value of the const variable, it's **In Mutalble**
- Howerer, we can change the elements of the const variable if it's a array.

# I dig deep
1. When you declare a variable with const and assign it a primitive value (like a number, string, or boolean), 
	the binding to that value cannot be reassigned.

	The error occurs because count is bound to the value 0, and ++ is effectively trying to reassign it to 1.

2. When you use const with objects (including arrays), the binding of the variable to the object cannot be changed, 
	but the contents (properties or elements) of the object itself can be modified.

	- countArr = 5 throws an error because you’re trying to reassign the constant variable to a new value.
	- countArr[0] = 5 does not throw an error because you’re modifying the content of the array. The const 
		only prevents re-binding, not changes to the object's properties or elements.

## Why Does This Happen?
- const ensures that the reference to the value stays constant.
- For primitives, the value is directly tied to the variable, so reassignment is prohibited.
- For objects, the variable holds a reference to the object. The reference cannot change, 
	but the object’s properties or elements can be modified.
