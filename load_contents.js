const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, '', 'input.json');

function getFileContents(path) {
    try {
        fs.accessSync(path);
        const stats = fs.statSync(path);
        if (stats) {
            if (stats.size > 0) {
                return fs.readFileSync(path, 'utf8');
            } else {
                console.error('File exists but there is no content');
            }
        }
    } catch (err) {
        console.error('File does not exist');
    }
}

const contents = getFileContents(inputFilePath);
if (contents) {
    console.log(contents);
}
