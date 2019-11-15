module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['api/js/*.js', 'docs/sources/**/*.js', 'docs/sources/**/*.json', 'docs/sources/**/*.css'],
                tasks: ['jshint', 'minjson','cssmin', 'uglify', 'copy']
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'api/**/*.js', 'docs/sources/**/*.js', 'docs/sources/**/*.json'],
            options: {
                browser: true
            }
        },
        uglify: {
            buildAPI: {
                src: ['api/js/*.js'],
                dest: 'api.min.js'
            },
            buildScript: {
                src: ['docs/sources/js/*.js'],
                dest: 'docs/script.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['api.min.js'],
                        dest: 'docs/api.min.js'
                    }
                ]
            }
        },
        minjson: {
            build: {
                files: { 'docs/data/leftContainerContent.min.json': 'docs/sources/json/leftContainerContent.json', 'docs/data/leftSidebarContent.min.json': 'docs/sources/json/leftSidebarContent.json', 'docs/data/ObjectContent.min.json': 'docs/sources/json/ObjectContent.json', 'docs/data/rightContainerContent.min.json': 'docs/sources/json/rightContainerContent.json', 'docs/data/rightSidebarContent.min.json': 'docs/sources/json/rightSidebarContent.json', 'docs/data/simpleFormContent.min.json': 'docs/sources/json/simpleFormContent.json' }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'docs/sources/css',
                    src: ['*.css'],
                    dest: 'docs/styles',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-minjson');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint', 'minjson', 'cssmin', 'uglify', 'copy', 'watch']);

};