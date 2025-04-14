import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  {/*here the value is being returned first before passing the curr val */}
  return ref.current; 
};
