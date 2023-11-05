import { sum } from "../sum"

test('Sum of two Numbers', () => {
    const res = sum(10,20);
    // Assertion
    expect(res).toBe(30);
 })