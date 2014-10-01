module.exports = function(grunt) {
  // Do grunt-related things in here
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: { 
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'compressed',
          config: 'config.rb'
        }
      }
    },
    autoprefixer: {
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: 'css/' // -> dest/css/file1.css, dest/css/file2.css
      }
    },
    watch: {
      sass: {
        files: '**/*.sass',
        tasks: ['compass','autoprefixer']
      }
    },
  });

  grunt.registerTask('default', ['compass', 'autoprefixer', 'watch']);
};