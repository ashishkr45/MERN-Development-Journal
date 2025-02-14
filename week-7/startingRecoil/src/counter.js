import { atom, selector } from "recoil";

export const counterAtom = atom({
    default: 0,
    key: "counter"

});

export const evenSelector = selector({
    key: "isEvenSelector",
    // the get function in the parameter throught this
    // get we can get any atom that we want.
    get: function({ get }) {
        const currentCount = get(counterAtom);
        return currentCount % 2 == 0;
    }
})