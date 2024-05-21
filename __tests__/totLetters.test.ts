import { expect, describe, it } from "bun:test";
import { totLetters } from "../functions";

// test function 'totLetters' into file functions.ts
describe("totLetters", () => {
    it("should count letters correctly", () => {
        const text = 'Hello World';
        expect(totLetters(text)).toBe(10);
    });

    it("should count as 0 letters", () => {
        const text = '      ';
        expect(totLetters(text)).toBe(0);
    });

    it("should not count special letters", () => {
        const text = 'Hello, World!!';
        expect(totLetters(text)).toBe(10);
    });
});
