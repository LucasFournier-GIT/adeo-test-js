const { filterData } = require('../src/filter');
const { data } = require('../data/data');

describe('filterData', () => {
    test('returns the full data array when filter pattern is an empty string', () => {
        const result = filterData(data, '');
        expect(result).toEqual(data);
    });

    test('returns the full data array when filter pattern is not specified', () => {
        const result = filterData(data);
        expect(result).toEqual(data);
    });

    test('returns a correctly filtered array when filter pattern is specified', () => {
        const result = filterData(data, 'ry');
        const expectedResult = [{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}];
        expect(result).toEqual(expectedResult);
    });

    test('returns an empty array when filter pattern does not match any animal name', () => {
        const result = filterData(data, 'Nonexistent Animal');
        expect(result).toEqual([]);
    });

    test('returns an array with correct data structures', () => {
        const result = filterData(data, 'John Dory');
        result.forEach(city => {
            expect(city).toHaveProperty('name');
            expect(city).toHaveProperty('people');
            city.people.forEach(person => {
                expect(person).toHaveProperty('name');
                expect(person).toHaveProperty('animals');
                person.animals.forEach(animal => {
                    expect(animal).toHaveProperty('name');
                });
            });
        });
    });
});
