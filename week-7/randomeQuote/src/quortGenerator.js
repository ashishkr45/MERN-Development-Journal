import { atom, selector } from "recoil";
import axios from "axios";

export const quoteState = atom({
  key: "quoteState",
  default: "", // Initial empty state
});

// Selector to fetch the quote
export const fetchQuoteSelector = selector({
  key: "fetchQuoteSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      return response.data;
    } catch (error) {
      console.error("Error fetching quote:", error);
      return "Failed to fetch quote.";
    }
  },
});
