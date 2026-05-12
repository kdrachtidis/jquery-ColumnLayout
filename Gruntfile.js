module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['api/js/*.js', '*.js'],
                tasks: ['jshint', 'copy']
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'api/**/*.js'],
            options: {
                browser: true
            }
        },
        uglify: {
            buildAPI: {
                src: ['api/js/*.js'],
                dest: 'api.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['api.min.js'],
                        dest: 'docs/demo-content/api.min.js'
                    },
                    {
                        src: ['api.min.js'],
                        dest: 'docs/demo-empty/api.min.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'copy', 'watch']);

};