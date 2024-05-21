import { expect, describe, it } from "bun:test";
import { totRepeatWords } from "../functions";

// test function 'totRepeatWords' into file functions.ts
describe("totRepeatWords", () => {
  it("should return an empty object when no words are repeated at least 10 times", () => {
    const text = 'Hello Hello Word';
    expect(totRepeatWords(text)).toEqual({});
  });

  it("should return correct counts for multiple words repeated at least 10 times", () => {
    const text = 'The sun shone high in the sky. The sun brought light and warmth. People loved the sun. Every morning, the sun rose. The sun was a source of life. Everyone admired the sun. The sun brightened the day. With the sun, everything was more beautiful. The sunlight was brilliant. The villagers awaited the sun. The sun warmed hearts. Beneath the sun, life flourished. Every day, the sun was present. The sun never failed. Days began with the sun. The sun was everyone\'s friend. The presence of the sun was reassuring.';
    expect(totRepeatWords(text)).toEqual({'sun': 16, 'the': 21});;
  });

  it("should return correct count for a single word repeated multiple times", () => {
    const text = 'hello '.repeat(11); 
    expect(totRepeatWords(text)).toEqual({ 'hello': 11 });
  });

  it("should handle special characters correctly", () => {
    const text = 'hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello!';
    expect(totRepeatWords(text)).toEqual({ 'hello': 11 });
  });

  it("should count numbers as words", () => {
    const text = '123 123 123 123 123 123 123 123 123 123 123';
    expect(totRepeatWords(text)).toEqual({ '123': 11 });
  });

  it("should include words repeated exactly 10 times", () => {
    const text = 'apple '.repeat(10) + 'kiwi '.repeat(10) + 'cherry '.repeat(9);
    expect(totRepeatWords(text)).toEqual({ 'apple': 10, 'kiwi': 10 });
  });

  it("should handle complex long texts correctly", () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor amet amet.';
    expect(totRepeatWords(text)).toEqual({ 'lorem': 11, 'dolor': 11, 'sit': 10, 'amet': 12, 'consectetur': 10, 'adipiscing': 10, 'elit': 10 });
  });

});
