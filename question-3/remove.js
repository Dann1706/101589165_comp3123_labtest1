const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsDirectory)) {

    const files = fs.readdirSync(logsDirectory);

    files.forEach(file => {

        const filePath = path.join(logsDirectory, file);

        fs.unlinkSync(filePath);

        console.log(`delete files...${file}`);
    });

    fs.rmdirSync(logsDirectory);
}

