module.exports = {
    resources: [     // resource types not needed to be requested
        'font',
        'image',
        'media',
        'stylesheet'
    ],
    tabs: 50,  // number of tabs
    timeout: 25000,  // timeout in ms
    log_file: 'error.log',  // error log
    output_file: 'culprits.txt',    // output file name
    list_browser: 'https://raw.githubusercontent.com/ZeroDot1/CoinBlockerLists/master/list_browser.txt'
}
