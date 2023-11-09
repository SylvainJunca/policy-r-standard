import {modThree} from "../src"

describe('modThree', () => {
    it('should return 1 for input "1101"', () => {
      expect(modThree("1101")).toBe(1);
    });
  
    it('should return 0 for input "1110"', () => {
      expect(modThree("1110")).toBe(2);
    });
  
    it('should return 1 for input "1111"', () => {
      expect(modThree("1111")).toBe(0);
    });
  
    it('should throw an error for invalid input', () => {
      expect(() => modThree("1123")).toThrowError("Input must only contain 0 and 1");
    });
  });