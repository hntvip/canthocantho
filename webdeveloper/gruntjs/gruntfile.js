module.exports = function(grunt) {
 grunt.initConfig({
    
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      },
      uglify: {
        my_target: {
          files: [{
              expand: true,
              cwd: 'js/',
              src: '*.js',
              dest: 'js/',
              ext: '.min.js'
          }]
        }
      },
      concat: {
          extras: {
            src: ['js/js1.js', 'js/js2.js'],
            dest: 'js/concatJS.js',
          },
      },
      sass: {                             
        dist: {                            
          options: {                      
            style: 'expanded',//nested, compact, compressed, expanded.
          },
          files: {                         
            'css/style.css': 'scss/style.scss', 
          }
        }
      },
      watch: {
        sass: {
          // We watch and compile sass files as normal but don't live reload here
          files: ['scss/*.scss'],
          tasks: ['sass'],
        },
       
      },
      uncss: {
        dist: {
          files: {
            'css/css22.css': ['html/index.html']
          }
        }
      },
      imagemin: {                 
          dynamic: {                         // Another target
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: 'img/',                   // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'img/'                  // Destination path prefix
            }]
          }
      },
      notify_hooks: {
        options: {
          enabled: true,
          max_jshint_notifications: 5, // maximum number of notifications from jshint output
          title: "Project Name", // defaults to the name in package.json, or will use project directory's name
          success: false, // whether successful grunt executions should be notified automatically
          duration: 3 // the duration of notification in seconds, for `notify-send only
        },
        uncss : {
          options: {
            title : "Dis this work?",
            message : "An error"
          }
        }
      }
 });

 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-uncss');
 grunt.loadNpmTasks('grunt-contrib-imagemin');
 grunt.loadNpmTasks('grunt-notify');

 grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
 grunt.task.run('notify_hooks');
};