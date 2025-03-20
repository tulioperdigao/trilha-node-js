import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem('hotweels Ferrari', 20.99, 7);
const item2 = await createItem('hotweels Lamborghini', 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Shoppe Cart TOTAL: " )

await cartService.calculateTotal(myCart)