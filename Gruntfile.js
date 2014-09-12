/**
 * Created by conor on 30/08/2014.
 */

module.exports = function (grunt) {

    "use strict";


    // Grunt Configuration
    grunt.initConfig({
        jshint : {
            files: {
                src: ['public/js/*.js', '*.js', 'routes/*.js']
            },
            options: {
                browser: true,
                node: true,
                globals: {
                    define : true,
                    require: true
                }
            }
        },

        jslint: {
            server: {
                src: [ // some example files
                    'routes/*.js',
                    '*.js'
                ],
                exclude: [],
                directives: {
                    node: true,
                    todo: true,
                    nomen: true,
                    unparam : true
                },
                options: {
                    edition: 'latest',
                    log: 'out/jslint/server-lint.log',
                    errorsOnly: true,
                    failOnError: false // because one or two unavoidable errors
                }
            },
            client: {
                src: [
                    'public/js/*.js'
                ],
                directives: {
                    browser: true,
                    console: true,
                    nomen: true,
                    unparam : true,
                    predef: [
                        'define',
                        'require'
                    ]
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    mocha: require('mocha'), // Use separate mocha module
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }

    });

    // Grunt Plugin Tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Register default tasks
    grunt.registerTask('default', ['jshint', 'jslint', 'mochaTest']);
};