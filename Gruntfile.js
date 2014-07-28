'use strict';
// http://michaljanicki.com.pl/grunt-js-czesc-2/
// Jeżeli jeszcze nie sa zainstalowane contriby nalzey z lini polecen wywolac 'npm install'. Zostanie zainstalowane wszystko co jest w devDependencies w package.json
// Jeżeli nie ma jeszcze package.json nalezy wywolac z lini polecen npm init
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*\n	<%= pkg.name %> - v <%= pkg.version %>\n' + '	date: <%= grunt.template.today("yyyy-mm-dd") %>\n	author: <%= pkg.author %>\n	email: <%= pkg.email %>\n*/\n',
				preserveComments: 'some'
			},
			my_target: {
				files: {
					'webroot/js/test.min.js': ['webroot/js/src/*.js']
				}
			}
		},
		less: {
			development: {
				options: {
					cleancss: true
				},
				files: {
					"webroot/css/style.css": "webroot/css/src/style.less"
				}
			}
		},
		watch: {
			scripts: {
				files: ['webroot/js/src/*.js', 'webroot/css/src/*.less'],
				tasks: ['uglify', 'less']
			}
		}
	});

	// Ładowanie zadania
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Wystarczy wywoła z linii poleceń 'grunt'. Domyślnym taskiem jest 'watch'
	grunt.registerTask('default', ['watch']);
};
