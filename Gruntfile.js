/* eslint-disable indent */
require('babel-register')({
  babelrc: true
});

var JSPM = './node_modules/.bin/jspm ';

module.exports = function (grunt) {
  var execConfig = {
    jspm: {
      cmd: function (action){
        if (action === 'setup') {
          return JSPM + 'install';
        }
        if (action === 'bundle') {
          return JSPM + 'build web/main static/js/build.js;' +
            JSPM + 'build web/main static/js/build-min.js --minify;';
        }
      }
    },
    serve: {
      cmd: function (env, mode) {
        var nodeBin = (mode === 'container') ? 'node-start' : 'node',
          cmd,
          args;
        switch (env) {
          case 'dev':
            args = 'NODE_ENV=development';
            break;
          case 'prod':
            args = 'NODE_ENV=production';
            break;
        }

        cmd  = args + ' ' + nodeBin + ' index.js &';
        console.log(cmd);
        return cmd;
      }
    }
  };

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      css: {
        src: 'dist/css/common/style.css',
        dest: 'static/css/',
        expand: true,
        flatten: true
      }
    },
    clean: {
      dist: ['dist']
    },
    exec: execConfig,
    postcss: {
      options: {
        failOnError: true,
        processors: [
          require('postcss-import'),
          require('postcss-mixins')(),
          require('postcss-nested')(),
          require('postcss-extend')(),
          require('postcss-simple-vars')(),
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        files: [{
          cwd: 'css/app',
          dest: 'dist/css',
          expand: true,
          ext: '.css',
          src: ['**/*.css']
        }]
      }
    },
    eslint: {
      code: {
        options: {
          cache: true,
          cacheFile: '.eslintcodecache'
        },
        src: ['web', './*.js']
      },
      test: {
        options: {
          cache: true,
          cacheFile: '.eslinttestcache'
        },
        src: [ './*.js' ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['postcss', 'copy:css']
      },
      js: {
        files: ['web/**/*.js'],
        tasks: ['eslint']
      }
    }
  });

  grunt.registerTask('build', 'Generate bundles', function(){
    grunt.task.run([
      'eslint',
      'exec:jspm:setup',
      'exec:jspm:bundle',
      'copy:css'
    ]);
  });

  grunt.registerTask('serve', 'Compile then start a web server', function(env, mode){
    grunt.task.run([
      'eslint',
      'exec:serve:' + env + ':' + mode,
      'watch'
    ]);
  });
};
