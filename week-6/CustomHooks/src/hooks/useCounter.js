import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  function decrement() {
	if(count > 0) {
		setCount(curr => curr - 1);
	} else {
		setCount(0);
	}
  }

  function increment() {
    setCount(current => current + 1);
  }

  return {
    count,
    increment, 
	decrement
  }
}

export default useCounter;