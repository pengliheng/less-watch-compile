'use strict';
const watcher = require('./watch')
const config = require('yargs')
    .option('w', {
        alias: 'watchDir',
        type: 'string',
        default: '/',
        describe: 'Specify what directory to watch'
    })
    .option('o', {
        alias: 'outputDir',
        type: 'string',
        describe: 'Specify what directory to output compiled LESS to'
    })
    .option('f', {
        alias: 'file',
        type: 'string',
        describe: 'Specify a particular file to watch, rather than watching an entire directory'
    })
    
    // Eventually
    .option('-s', {
        alias: 'safetyOff',
        type: 'boolean',
        describe: 'Disable safety check for importing dependencies of other LESS files'
    })
    
    .demand(['o'])
    .argv
if (!config.file)
    watcher.start(config.safetyOff, config.watchDir.trim(), config.outputDir.trim())
else
    watcher.start(config.safetyOff, config.file.trim(), config.outputDir.trim(), true)