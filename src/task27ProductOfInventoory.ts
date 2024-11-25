import promptSync from 'prompt-sync';

console.log("Task 7. Product of inventory");
const prompt = promptSync();

type Product = {
    name: string;
    price: number;
    quantity: number;
  };

let products: Product[] = [];
let name: string;
let price: number;
let quantity: number; 

// Input user data with loop
for (let i = 0; i <= 2; i++) {
    name = prompt("Enter the name of product: ");
    price = parseInt(prompt("Enter the price of product: "));
    quantity = (parseInt(prompt("Enter the number of products ")));
    products.push({name, price, quantity});
}
console.log(products);

let totalValue = 0;
for (const product of products) {
    let amount = product.price * product.quantity;
    totalValue = totalValue + amount;
}
console.log(totalValue);