const { data } = require('./data/data');
const { filterData } = require('./src/filter')
const { appendCounts } = require('./src/count');

const args = process.argv.slice(2);
const filterArg = args.find(arg => arg.startsWith('--filter'));
const countArg = args.find(arg => arg === '--count');

let outputData = [];

if (filterArg) {
    filterPattern = filterArg.split('=')[1];

    outputData = filterData(data, filterPattern);
} else if (countArg) {
    outputData = appendCounts(data);
}

if (outputData.length > 0) {
    console.log(JSON.stringify(outputData));
    process.exit(0);
} else {
    console.log('Usage: node app.js --filter=pattern');
    process.exit(1);
}
