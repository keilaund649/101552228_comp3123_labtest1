const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log('Logs directory created successfully.');
}
process.chdir(logDir);
console.log(`Current working directory: ${process.cwd()}`);
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(`Created file: ${fileName}`);
}
