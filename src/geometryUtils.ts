function calculateTriangleArea(base: number, height: number): number;

function calculateTriangleArea(sideA: number, sideB: number, angle: number): number;

function calculateTriangleArea(a: number, b: number, c?: number): number {
    if (c === undefined) {
        // Calculation using base and height
        return a * b / 2;
    } else {
        // Calculation using two sides and angle in degrees
        let inRadians = c * Math.PI / 180;
        return 0.5 * a * b * Math.sin(inRadians) / 2;
    }
}

export {calculateTriangleArea};
