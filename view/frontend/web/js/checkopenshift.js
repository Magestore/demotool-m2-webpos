
define([
	'Magestore_Webpos/js/model/shift/current-shift'    	
], function ( currentShift) {
    'use strict';   
	
	currentShift.isOpenShift.subscribe(function(){
		if(currentShift.isOpenShift()){
			$('#intro-webpos1').addClass('inactive');
			$('#intro-webpos4').addClass('active');
		}
		else{
			setTimeout(function() {intro_welcome()},7000);		
		}	
	});    
});
