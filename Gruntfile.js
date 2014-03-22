'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-browserify');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// opens the runner page to run the tests
		mocha: {
			options: {
				run: true,
				reporter: 'Spec'
			},
			all: {
				src: ['test/testrunner.html']
			}
        },

		browserify: {
			test: {
				// Use the specs as our dependency graph entry points.
				src: ['test/*.spec.js'],
				dest: 'test/test.bundle.js',
				options: {
					// Generate a source map for a more pleasant browser debugger experience.
					debug: true
				}
			}
		}
	});

	grunt.registerTask('compile-tests',
		'Compiles the JavaScript unit tests without running them.',
		['browserify:test']
    );

	grunt.registerTask('test', [
		'compile-tests',
		'mocha'
	]);

};
