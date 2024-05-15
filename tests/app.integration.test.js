const { spawn } = require('child_process');
const path = require('path');

describe('app.js', () => {
    test('returns the correct output when --filter is provided', (done) => {
        const app = spawn('node', [path.join(__dirname, '../app.js'), '--filter=ry']);

        let output = '';
        app.stdout.on('data', (data) => {
            output += data;
        });

        app.on('close', () => {
            const expectedOutput = "[{\"name\":\"Uzuzozne\",\"people\":[{\"name\":\"Lillie Abbott\",\"animals\":[{\"name\":\"John Dory\"}]}]},{\"name\":\"Satanwi\",\"people\":[{\"name\":\"Anthony Bruno\",\"animals\":[{\"name\":\"Oryx\"}]}]}]";
            expect(output.trim()).toEqual(expectedOutput);
            done();
        });
    });

    test('returns usage instructions when --filter is not provided', (done) => {
        const app = spawn('node', [path.join(__dirname, '../app.js')]);

        let output = '';
        app.stdout.on('data', (data) => {
            output += data;
        });

        app.on('close', () => {
            const expectedOutput = 'Usage: node app.js --filter=pattern\n';
            expect(output).toEqual(expectedOutput);
            done();
        });
    });
});
