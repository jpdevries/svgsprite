module.exports = function(grunt) {

  // Project configuration.
  var initConfig = {
    pkg: grunt.file.readJSON('package.json'),
    dirs: { /* just defining some properties */
      lib: './lib/',
      theme: '../',
      assets: 'assets/',
      img: 'img/'
    },
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byComponent'
        }
      }
    },
    copy: {
      'font-awesome-svg-png-svg':{
        src: '<%= dirs.lib %>/font-awesome-svg-png/svg/*.svg',
        dest: '<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/svg/',
        expand: true,
        flatten: true
      },
      'font-awesome-svg-png-png':{
        src: '<%= dirs.lib %>/font-awesome-svg-png/png/*.png',
        dest: '<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/png/',
        expand: true,
        flatten: true
      }
    },
    svgstore: {
      icons: {
        files: {
          '<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>icons.svg': [
          	'<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/svg/thinkful.svg',
			'<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/svg/adjust.svg',
			'<%= dirs.theme %><%= dirs.assets %><%= dirs.img %>src/svg/thumbs-up.svg'
          ]
        },
        options: {
          formatting : {
            indent_size : 2
          },
          prefix: 'icon-',
          cleanup: true,
          convertNameToId: function(name) {
            return name.replace(/^\w+\_/, '');
          }
        }
      }
    }
  };

  grunt.initConfig(initConfig);

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('prebuild', ['bower', 'copy', 'svgstore']);
  
};