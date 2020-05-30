import limitCharacters, { LimitCharacters } from "../index";

const originalText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const defaultMore = "...";

test("Skip", () => {
  const options: LimitCharacters = { text: "" };

  expect(limitCharacters(options)).toBe("");
});

test("No trim needed", () => {
  const options: LimitCharacters = { text: originalText };

  expect(limitCharacters(options)).toBe(originalText);
});

test("First 20 characters", () => {
  const options: LimitCharacters = { text: originalText, length: 20 };
  const sliced = originalText.slice(0, 20 - defaultMore?.length);

  expect(limitCharacters(options)).toBe(`${sliced}${defaultMore}`);
});

test("Don’t break word", () => {
  const options: LimitCharacters = { text: originalText, length: 20 };
  const sliced = originalText.slice(0, 20 - defaultMore?.length);

  expect(limitCharacters(options)).toBe(`${sliced}${defaultMore}`);
});

test("Just one word", () => {
  const text = "limit-characters";
  const options: LimitCharacters = { text, length: 15 };
  const sliced = text.slice(0, 15 - defaultMore?.length);

  expect(limitCharacters(options)).toBe(`${sliced}${defaultMore}`);
});

test("Custom more", () => {
  const more = "... read more";
  const options: LimitCharacters = { text: originalText, length: 20, more };
  const sliced = originalText.slice(0, 20 - more?.length);

  expect(limitCharacters(options)).toBe(`${sliced}${more}`);
});
