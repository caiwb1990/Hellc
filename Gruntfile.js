'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  
    cssmin: {
      minify: {
        src: 'template/css/*.css',
        dest: 'template/main.css'
      }
    },

    concat: {
      dist: {
        src: ['lib/jquery.js', "template/js/prism.js", "template/js/hogan.min.js", 'lib/spine.js', 'lib/route.js', 'lib/manager.js'],
        dest: 'template/main.js'
      }
    },

    uglify: {
      build: {
        src: 'template/main.js',
        dest: 'template/main.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['cssmin', 'concat', 'uglify']);

};
