const { data } = require('./data/data');
const { filterData } = require('./src/filter');

const args = process.argv.slice(2);
const filterArg = args.find(arg => arg.startsWith('--filter'));

if (filterArg) {
    filterPattern = filterArg.split('=')[1];

    const filteredData = filterData(data, filterPattern);

    if (filteredData.length > 0) {
        console.log(JSON.stringify(filteredData));
    }
} else {
    console.log('Usage: node app.js --filter=pattern');
}
