module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-wordpress" );

grunt.initConfig({
	wordpress: grunt.file.readJSON( "config.json" )
});

};
