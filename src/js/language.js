/**
 * Language class js file
 */

const fileExtRegex = /\.([^.]*)$/;

const extensions = {
	"js": "javascript",
	"java": "java",
	"cpp": "c++",
	"c": "c",
	"h": [ "c", "c++" ],
	"fs": "glsl",
	"vs": "glsl"
};

const availableLanguages = [];

Object.keys( extensions ).forEach( ( key, idx ) => {

	let elt = extensions[ key ];

	if ( Array.isArray( elt ) ) {

		for ( language of elt ) {

			if ( availableLanguages.indexOf( language ) === -1 )
				availableLanguages.push( v );

		}

	} else {

		if ( availableLanguages.indexOf( elt ) === -1 )
			availableLanguages.push( elt );

	}

} );

function getFileLanguages( filePath ) {
	let fileExtMatch = fileExtRegex.exec( filePath );
	if ( fileExtMatch === null || fileExtMatch[1] === '' ) return [];
	let ext = fileExtMatch[1];
	let languages = extensions[ ext ];
	if ( languages === undefined ) return [];
	return languages;
}

module.exports = {
	extensions: extensions,
	available_languages: availableLanguages,
	getFileLanguages: getFileLanguages
};
