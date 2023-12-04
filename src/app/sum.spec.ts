const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('should returns 2', () => {
    const result = sum(1, 1);

    expect(result).toEqual(2);
  });
});
