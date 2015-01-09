module.exports = function () {
    return {
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        autoWatch: true,

        //these are default values anyway
        singleRun: false,
        colors: true,

        files: [
            //3rd party code
            'bower_components/angular/angular.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/underscore/underscore.js',
            '/bower_components/moment/moment.js',

            //App-specific Code
            'client/app/**/*.js',
            'client/components/**/*.js'
        ]
    };
};
