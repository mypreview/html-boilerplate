( function ( $ ) {
	( 'use strict' );

	var $currentYear = $( '#current-year' );
	if ( $currentYear ) {
		$currentYear.text( new Date().getFullYear() );
	}
} )( jQuery );
