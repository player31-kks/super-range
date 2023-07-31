import { range } from "../src/index";

describe("range function test", () => {
  describe("one argument", () => {
    it("should return empty array when limit is 0", () => {
      const result = [...range(0)];
      expect(result).toHaveLength(0);
    });

    const result = [...range(5)]; //[0,1,2,3,4];
    it("should return length correctly", () => {
      expect(result).toHaveLength(5);
    });
    it.each([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ])(
      "should return result correctly (index %i,value %i)?",
      (index: number, value: number) => {
        expect(result[index]).toEqual(value);
      }
    );
  });

  describe("two argument", () => {
    it("should return empty array when limit is 0", () => {
      const result = [...range(0, 0)];
      expect(result).toHaveLength(0);
    });

    it("should return empty array when limit is 0", () => {
      const result = [...range(0, -5)];
      expect(result).toHaveLength(5);
    });

    const result = [...range(5, 10)]; //[5,6,7,8,9]

    it("should return length correctly", () => {
      expect(result).toHaveLength(10 - 5);
    });
    it("should return first value and last value correctly", () => {
      const lastIdx = result.length - 1;
      const firstIdx = 0;

      expect(result[firstIdx]).toEqual(5);
      expect(result[lastIdx]).toEqual(9);
    });
    it("should reverse result when limit is bigger then first", () => {
      const result = [...range(10, 5)]; // [10,9,8,7,6];

      const lastIdx = result.length - 1;
      const firstIdx = 0;

      expect(result[firstIdx]).toEqual(10);
      expect(result[lastIdx]).toEqual(6);
    });
  });

  describe("three argument", () => {
    const result = [...range(1, 10, 3)]; //[1,4,7];
    it("should return length correctly", () => {
      expect(result).toHaveLength(Math.floor((10 - 1) / 3));
    });
    it.each([
      [0, 1],
      [1, 4],
      [2, 7],
    ])(
      "should return result correctly (index %i, value %i)",
      (index: number, value: number) => {
        expect(result[index]).toEqual(value);
      }
    );
    it.each([
      [0, 10],
      [1, 7],
      [2, 4],
    ])(
      "should reverse result correctly when step is negative  (index %i, value %i)",
      (index: number, value: number) => {
        const result = [...range(10, 3, -3)]; // [10,7,4]
        expect(result[index]).toEqual(value);
      }
    );
  });

  describe("using for of statement", () => {
    it.each([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ])(
      "should return result corretly when using for..of statement (index %i,value %i)",
      (index: number, value: number) => {
        const result: number[] = [];
        for (const element of range(5)) {
          result.push(element);
        }
        expect(result[index]).toEqual(value);
      }
    );
  });
});
