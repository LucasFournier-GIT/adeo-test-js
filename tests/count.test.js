const {appendCounts} = require('../src/count');

describe('appendCounts', () => {
    it('should append counts to people and city names', () => {
        const data = [{
            name: 'Dillauti',
            people:
                [{
                    name: 'Winifred Graham',
                    animals:
                        [{name: 'Anoa'},
                            {name: 'Duck'},
                            {name: 'Narwhal'}]
                },
                    {
                        name: 'Blanche Viciani',
                        animals:
                            [{name: 'Barbet'},
                                {name: 'Rhea'},
                                {name: 'Snakes'},
                                {name: 'Antelope'},
                                {name: 'Echidna'},
                                {name: 'Crow'},
                                {name: 'Guinea Fowl'},
                                {name: 'Deer Mouse'}]
                    },
                    {
                        name: 'Philip Murray',
                        animals:
                            [{name: 'Sand Dollar'},
                                {name: 'Buzzard'},
                                {name: 'Elephant'}]
                    }]
        },
        {
            name: 'Tohabdal',
            people:
                [{
                    name: 'Effie Houghton',
                    animals:
                        [{name: 'Zebra'},
                        {name: 'Ring-tailed Lemur'}]
                },
                    {
                        name: 'Essie Bennett',
                        animals:
                            [{name: 'Aldabra Tortoise'},
                            {name: 'Patagonian Toothfish'}]
                    },
                    {
                        name: 'Owen Bongini',
                        animals:
                            [{name: 'Zebrashark'},
                            {name: 'Dogs'},
                            {name: 'Mouse'},
                            {name: 'Numbat'},
                            {name: 'African Wild Dog'}]
                    },
                    {
                        name: 'Alexander Fleury',
                        animals:
                            [{name: 'Gelada'},
                            {name: 'Rattlesnake'},
                            {name: 'Rabbit'},
                            {name: 'Aardvark'},
                            {name: 'Duck'},
                            {name: 'Courser'},
                            {name: 'Woodpecker'}]
                    }]
        }];

        const result = appendCounts(data);

        expect(result).toEqual([{
            name: 'Dillauti [3]',
            people:
                [{
                    name: 'Winifred Graham [3]',
                    animals:
                        [{name: 'Anoa'},
                        {name: 'Duck'},
                        {name: 'Narwhal'}]
                },
                    {
                        name: 'Blanche Viciani [8]',
                        animals:
                            [{name: 'Barbet'},
                            {name: 'Rhea'},
                            {name: 'Snakes'},
                            {name: 'Antelope'},
                            {name: 'Echidna'},
                            {name: 'Crow'},
                            {name: 'Guinea Fowl'},
                            {name: 'Deer Mouse'}]
                    },
                    {
                        name: 'Philip Murray [3]',
                        animals:
                            [{name: 'Sand Dollar'},
                            {name: 'Buzzard'},
                            {name: 'Elephant'}]
                    }]
        },
        {
            name: 'Tohabdal [4]',
            people:
                [{
                    name: 'Effie Houghton [2]',
                    animals:
                        [{name: 'Zebra'},
                        {name: 'Ring-tailed Lemur'}]
                },
                    {
                        name: 'Essie Bennett [2]',
                        animals:
                            [{name: 'Aldabra Tortoise'},
                            {name: 'Patagonian Toothfish'}]
                    },
                    {
                        name: 'Owen Bongini [5]',
                        animals:
                            [{name: 'Zebrashark'},
                            {name: 'Dogs'},
                            {name: 'Mouse'},
                            {name: 'Numbat'},
                            {name: 'African Wild Dog'}]
                    },
                    {
                        name: 'Alexander Fleury [7]',
                        animals:
                            [{name: 'Gelada'},
                            {name: 'Rattlesnake'},
                            {name: 'Rabbit'},
                            {name: 'Aardvark'},
                            {name: 'Duck'},
                            {name: 'Courser'},
                            {name: 'Woodpecker'}]
                    }]
        }]);
    });

    it('should append zero counts for empty arrays', () => {
        const data = [{
            name: 'Dillauti',
            people:
                []
        },
            {
                name: 'Tohabdal',
                people:
                    [{
                        name: 'Effie Houghton',
                        animals:
                            []
                    }]
            }];

        const result = appendCounts(data);

        expect(result).toEqual([{
            name: 'Dillauti [0]',
            people:
                []
        },
            {
                name: 'Tohabdal [1]',
                people:
                    [{
                        name: 'Effie Houghton [0]',
                        animals:
                            []
                    }]
            }]);
    });
});
