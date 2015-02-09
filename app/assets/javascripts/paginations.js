$(document).click(function( event ) {
	 //event.preventDefault();
	$('.pagination a').live("click", function () {  
	    $('.pagination').html('Data is loading...');  
	    $.get(this.href, null, null, 'script');  
	    return false;  
	  });  
});  
	
	
	
	   
/*$(document).on('ready page:load', function () {
	$('.pagination a').live("click", function () {  
	    $('.pagination').html('Data is loading...');  
	    $.get(this.href, null, null, 'script');  
	    return false;  
	  });  
});*/  
	
	

	   