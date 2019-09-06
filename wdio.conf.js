var chromium = require('@taku-o/chromium');

exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './test/specs/*.js',
    ],
    exclude: [
    ],
    maxInstances: 10,
    sync: false,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu'],
            binary: chromium.path,
        },
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

