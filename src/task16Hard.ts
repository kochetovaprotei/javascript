import promptSync from 'prompt-sync';

console.log("Task 6. Basic Shopping Cart");
const prompt = promptSync();

let sumOfItems = 0;
while (true) {
    let priceUser = prompt("Enter the price of item: ");
    if (priceUser === "done")
    {
        break;
    }
    sumOfItems = sumOfItems + parseInt(priceUser);
}
console.log("The total price is: ", sumOfItems);
