# Jest
Jest is a delightful Javascript testing framework with a focus on simplicity

It works with project using: `Babel`, `TypeScript`, `Node`, `React`, `Angular` and `Vue` and more!

## Matchers
1. `toBe:` uses `Object.is` to test exact equality.
2. `toEqual:` To check the value of an object.
    **`Example:`**<br/>
    ```
    test('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
    });
    ```
3. `toBeNull:` when you want to check that something is null.
4. `toBeCloseTo:` For floating point equality.
    **`Example:`**<br/>
    ```
    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3);           This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    });
    ```
5.  `toMatch:` For string match
    **`Example:`**<br/>
    ```
    test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
    });
    ```

    