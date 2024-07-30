import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

let arr = [1, 2, 3, 4, 5];

updateUniqueItems(arr)
console.log(arr);
