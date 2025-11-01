import { generateAnswer } from "../index";

test("generateAnswer returns correct answer", () => {
  const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0);
  const str = generateAnswer("Hello");
  expect(str).toBe("はは");
  mockRandom.mockRestore();
});