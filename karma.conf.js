var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
    var conf = sharedConfig();

    conf.files = conf.files.concat([
        //extra testing code
    ]);

    config.set(conf);
};
