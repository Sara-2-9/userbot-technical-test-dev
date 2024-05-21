import { expect, describe, it } from "bun:test";
import { totSpaces } from "../functions";

// test function 'totSpaces' into file functions.ts
describe("totSpaces", () => {
    it("should count empty spaces correctly", () => {
        const text = 'Hello World!';
        expect(totSpaces(text)).toBe(1);
    });

    it("should handle empty string", () => {
        const text = '';
        expect(totSpaces(text)).toBe(0);
    });

    it("should count more nearby empty spaces", () => {
        const text = 'hello   world';
        expect(totSpaces(text)).toBe(3);
    });
});
