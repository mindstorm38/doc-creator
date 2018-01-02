/**
 * Project class js file
 */

// - Requires
const language = require('./language');
const path = require('path');
const fs = require('fs');

class Project {

	constructor( path ) {

		this.path = path;

	}

	load() {

		this.filesCount = 0;
		this.languages = [];

		this.checkup( this.path );

	}

	checkup( path ) {

		let files = fs.readdirSync( projectPath );

		files.forEach( ( file ) => {

			let directory = false;

			try { directory = fs.lstatSync( file ).isDirectory(); } catch ( e ) {}

			if ( directory ) {

				this.checkup( file );

			} else {

				this.filesCount++;

				let languages = language.getFileLanguages( file );
				languages.forEach( ( language ) => {
					this.addLanguageIfNotExists( language );
				} )

			}

		} );

	}

	addLanguageIfNotExists( language ) {
		if ( this.languages.indexOf( language ) === -1 ) {
			this.languages.push( language );
		}
	}

}

module.exports = {
	Project: Project
};
