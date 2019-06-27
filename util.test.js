const { generateText } = require('./util');

/** Unit test */
// 1. Tests regular behavior cases ( double check )
test('should output name and age', () => {
    const text = generateText('Laureline', 26);
    expect(text).toBe('Laureline (26 years old)');

    const text2 = generateText('Nova', 3);
    expect(text2).toBe('Nova (3 years old)');
});

// 2. Tests with empty-data case
test('should output data-less text', () => {
    const text = generateText('', null);
    expect( text ).toBe(' (null years old)');
})

// 3. Tests with no arguments
test('should output undefined-value text', () => {
    const text = generateText();
    expect( text ).toBe('undefined (undefined years old)');
})