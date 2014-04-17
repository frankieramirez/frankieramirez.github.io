module.exports = function(grunt) {
  // Do grunt-related things in here
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
      jshint: {
        all: ['Gruntfile.js']
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: [{
            expand: false,
            cwd: 'sass',
            src: ['*.sass'],
            dest: 'css/',
            ext: '.css'
          }]
        }
    },
    watch: {
      css: {
        files: 'sass/*.sass',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};