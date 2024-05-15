function filterData(data, pattern) {
    if (!pattern || pattern.trim() === '') return data;

    return data.map(city => {
        const filteredPeople = city.people.map(person => {
            const filteredAnimals = person.animals.filter(animal => animal.name.includes(pattern));
            return filteredAnimals.length > 0 ? { ...person, animals: filteredAnimals } : null;
        }).filter(Boolean);

        return filteredPeople.length > 0 ? { ...city, people: filteredPeople } : null;
    }).filter(Boolean);
}

module.exports = {
    filterData
};
