const fs =require('fs');
const path =require('path');

const logger = (req, res, next) => {
    const log = '${new Date().toISOString()} ${req.method} ${req.url}\n';
    fs.appendFile(path.join(__dirname, '../log.txt'), log);
    next();

};
module.exports = logger;