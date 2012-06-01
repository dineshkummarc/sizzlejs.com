module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-wordpress" );

grunt.initConfig({
	wordpress: grunt.utils._.extend({
		dir: "dist"
	}, grunt.file.readJSON( "config.json" ) )
});

grunt.registerTask( "build-wordpress", function() {
	grunt.file.copy( "index.html", "dist/posts/page/index.html" );
});

grunt.registerTask( "default", "build-wordpress" );

};
