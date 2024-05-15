function appendCounts(data) {
    return data.map(city => {
        const people = city.people.map(person => {
            const animals = person.animals;
            return { ...person, name: `${person.name} [${animals.length}]`, animals };
        });
        return { ...city, name: `${city.name} [${people.length}]`, people };
    });
}

module.exports = { appendCounts };
