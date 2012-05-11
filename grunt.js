module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-wordpress" );


grunt.initConfig({
	wordpress: grunt.utils._.extend({
		dir: "dist",
	}, grunt.file.readJSON( "config.json" ) )
});

grunt.registerTask( "build", function() {
	grunt.file.copy( "index.html", "dist/page/index.html" );
});

grunt.registerTask( "default", "build" );

};
