exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts : {
        showColors: true,
        defaultTimeoutInterval : 3000000
    }
}

