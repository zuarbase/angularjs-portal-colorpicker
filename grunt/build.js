module.exports = function(grunt) {
    grunt.registerTask('build', [
        'jshint:src',
        'jshint:grunt',
        'clean:build',
        'run:rollup',
        'less:build',
        'cssmin:build',
    ]);
};
