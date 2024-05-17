const { spawn } = require('child_process');
const path = require('path');
const { countExpectedOutput, filterExpectedOutput } = require("./expectedOutputs");

describe('app.js', () => {
    test('returns the correct output when --filter is provided', (done) => {
        const app = spawn('node', [path.join(__dirname, '../app.js'), '--filter=ry']);

        let output = '';
        app.stdout.on('data', (data) => {
            output += data;
        });

        app.on('close', (code) => {
            expect(code).toEqual(0)
            expect(JSON.parse(output)).toEqual(filterExpectedOutput);
            done();
        });
    });

    test('returns usage instructions when --filter is not provided', (done) => {
        const app = spawn('node', [path.join(__dirname, '../app.js')]);

        let output = '';
        app.stdout.on('data', (data) => {
            output += data;
        });

        app.on('close', (code) => {
            const expectedOutput = 'Usage: node app.js --filter=pattern\n';

            expect(code).toEqual(1);
            expect(output).toEqual(expectedOutput);
            done();
        });
    });
    test('prints data with counts appended to names', (done) => {
        const app = spawn('node', [path.join(__dirname, '../app.js'), '--count']);

        let output = '';
        app.stdout.on('data', (data) => {
            output += data;
        });

        app.on('close', (code) => {
            expect(code).toEqual(0);
            expect(JSON.parse(output)).toEqual(countExpectedOutput);
            done();
        });
    });
});
