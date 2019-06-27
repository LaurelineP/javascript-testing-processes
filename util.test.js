const { generateText } = require('./util');

/** Unit test */
test('should output name and age', () => {
    const text = generateText('Laureline', 26);
    expect(text).toBe('Laureline (26 years old)')
});
