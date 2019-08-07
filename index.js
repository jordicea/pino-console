const logger = require('pino')();

console.log = (...args) => {
    logger.info(...args);
};
console.error = (...args) => {
    logger.error(...args);
};