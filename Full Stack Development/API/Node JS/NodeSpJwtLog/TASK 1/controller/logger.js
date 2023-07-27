const {createLogger,transports,format} = require('winston');

// log func
const myLogger = createLogger({
    transports:[
        new transports.File({
            filename:'logs/myLog.txt',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'logs/myError.txt',
            level:'error',
            format: format.combine(format.timestamp(),format.json())
        }) 
    ]
})

module.exports = {myLogger}