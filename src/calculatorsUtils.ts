function calculate(a: number, b: number, operation: string): number {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;   
        case "/":
            return a / b;
        default:
            return 0;
    }
}

export {calculate};