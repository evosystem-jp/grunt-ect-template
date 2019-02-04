"use strict";

module.exports = function (grunt) {

	// -----------------------------------
	//  Plugins
	// -----------------------------------

	grunt.loadNpmTasks("grunt-ect");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// -----------------------------------
	//  Options
	// -----------------------------------

	grunt.config.init({
		dir: {
			src: "src",
			dest: "public_html"
		},
		less: {
			style: {
				options: {
					cleancss: true
				},
				src: "<%= dir.src %>/less/main.less",
				dest: "<%= dir.dest %>/css/main.css"
			},
		},
		ect: {
			options: {
				root: "<%= dir.src %>/ect"
			},
			index: {
				src: "index.ect",
				dest: "<%= dir.dest %>/index.html",
				variables: {
					id: "top",
					title: "Document Title",
					links: [
						"http://example1.example", "http://example2.example", "http://example3.example"
					]
				}
			}
		},
		watch: {
			less: {
				files: ["<%= dir.src %>/less/*.less"],
				tasks: ["less"]
			},
			watch: {
				files: ["<%= dir.src %>/ect/*.ect"],
				tasks: ["ect"]
			}
		}
	});

	// -----------------------------------
	//  Tasks
	// -----------------------------------

	grunt.registerTask("default", ["less", "ect", "watch"]);
};
