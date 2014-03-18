'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-mocha-runner');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		mochaRunner: {
			all: {
				scripts: [
					'src/*.js',
					'test/*.spec.js'
				],
				styles: ['styles/*.css']
			}
		},

		// opens the runner page to run the tests
		mocha: {
			options: {
				run: true,
				reporter: 'Nyan'
			},
			test: {
				options: {
					// url to the runner page served by mochaRunner
					urls: ['http://localhost:8000']
				}
			}
        }

	});

	grunt.registerTask('default', [
		'mochaRunner',
		'mocha'
	]);

};
