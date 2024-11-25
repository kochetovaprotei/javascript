import promptSync from 'prompt-sync';

console.log("Task 5. Creating and Using a Type for Products");
const prompt = promptSync();

type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

let products: Product[] = [];
let name: string;
let price: number;
let inStock: boolean; 

// Input user data with loop
for (let i = 0; i <= 2; i++) {
    name = prompt("Enter the name of product: ");
    price = parseInt(prompt("Enter the price of product: "));
    inStock = (prompt("Is it in stock? (true/false) ").toLowerCase() === "true");
    products.push({name, price, inStock});
}
console.log(products);