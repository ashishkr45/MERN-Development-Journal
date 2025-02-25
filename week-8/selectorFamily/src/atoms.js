import axios from 'axios';
import { atom, selector } from 'recoil';

// Atom to store fetched quotes
export const quoteAtom = atom({
  key: 'quoteAtom',
  default: selector({
    key: 'quoteSelector',
    get: async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        return response.data; // ✅ Only return the quote data
      } catch (error) {
        console.error("Error fetching quote:", error);
        return { content: "Failed to load quote.", author: "Error" }; // ✅ Graceful fallback
      }
    },
  }),
});
