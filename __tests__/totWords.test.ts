import { expect, describe, it } from "bun:test";
import { totWords } from "../functions";

// test function 'totWords' into file functions.ts
describe("totWords", () => {
    it("should count words correctly", () => {
        const text = 'Hello world';
        expect(totWords(text)).toBe(2);
    });

    it("should handle empty string", () => {
        const text = '';
        expect(totWords(text)).toBe(0);
    });

    it("should ignore multiple empty spaces", () => {
        const text = 'Hello  world ';
        expect(totWords(text)).toBe(2);
    });

    it("should ignore special characters", () => {
        const text = 'Hello world!!!';
        expect(totWords(text)).toBe(2);
    })
});
