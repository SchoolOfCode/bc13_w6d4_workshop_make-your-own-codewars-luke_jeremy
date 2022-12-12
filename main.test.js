//👉 Write your tests below here:
import { generateBanner } from "./main";
import { expect, test} from '@jest/globals';

test("When parameter is more than 10 words, function returns 'Max banner length is 10 words'", () => {
   const actual = generateBanner("blah blah blah blah blah blah blah blah blah blah blah")
   const expected = false
   expect(actual).toBe(expected);

} );

test("When parameter != string, function returns 'please enter some words", () => {
   const actual = generateBanner(["Please enter some words"])
   const expected = false

   expect(actual).toStrictEqual(expected);
})

test("When string is given, function capitalises each word and returns string with smiley at start of each word", () => {
    const actual = generateBanner("Hello world")
    const expected = ":smiley:Hello :smiley:World"

    expect(actual).toStrictEqual(expected)
})
