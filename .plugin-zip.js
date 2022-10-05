/**
 * External dependencies
 */
const AdmZip = require( 'adm-zip' );
const { realpathSync } = require( 'fs' );
const { sync: glob } = require( 'fast-glob' );
const { sync: readPkgUp } = require( 'read-pkg-up' );
const { dirname } = require( 'path' );
const { stdout } = require( 'process' );

/**
 * Internal dependencies
 */
const { packageJson } = readPkgUp( {
	cwd: realpathSync( process.cwd() ),
} );
const getPackageProp = ( prop ) => packageJson && packageJson[ prop ];
const hasPackageProp = ( prop ) => packageJson && packageJson.hasOwnProperty( prop );
const name = getPackageProp( 'name' );

stdout.write( `Creating archive for \`${ name }\` project…\n\n` );
const zip = new AdmZip();

if ( hasPackageProp( 'files' ) ) {
	stdout.write( 'Using the `files` field from `package.json` to detect files:\n\n' );
	const files = glob( getPackageProp( 'files' ), {
		caseSensitiveMatch: false,
	} );
	files.forEach( ( file ) => {
		stdout.write( `  Adding \`${ file }\`.\n` );
		const zipDirectory = dirname( file );
		zip.addLocalFile( file, zipDirectory !== '.' ? zipDirectory : '' );
	} );

	zip.writeZip( `./${ name }.zip` );
	stdout.write( `\nDone. \`${ name }.zip\` is ready! 🎉\n` );
} else {
	stdout.write( '\nThe `files` field is not found in the `package.json`!\n' );
}
