function greetBasedOnTime(name: string, time: number): string {
    // Compare numbers
if (5 <= time && time <= 11) {
    return `Good morning, ${name}!`;
}
else if (12 <= time && time <= 17) {
    return `Good afternoon, ${name}!`;
}
else if (18 <= time && time <= 24) {
    return `Good evening!, ${name}!`;
}
else {
    return "Incorrect time";
}
}

export { greetBasedOnTime };
