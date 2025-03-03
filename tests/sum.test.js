import { describe, it, expect } from 'vitest';  
import { sum } from '../src/sum';  

describe('sum function', () => {
  it('should correctly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);  
  });

  it('should return a negative result when adding negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);  
  });
});
